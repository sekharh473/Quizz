// Session state and rate limit tracking
let sessionToken = null;
let lastRequestTime = 0;
const COOLDOWN_MS = 5100;

const cache = {
  categories: null,
  questions: {}
};

// Track active requests to prevent double-calling the same endpoint
const pendingRequests = new Map();

/**
 * Ensures we respect the 5-second rate limit per IP
 */
const respectRateLimit = async () => {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  
  if (timeSinceLastRequest < COOLDOWN_MS) {
    const waitTime = COOLDOWN_MS - timeSinceLastRequest;
    await new Promise(resolve => setTimeout(resolve, waitTime));
  }
  lastRequestTime = Date.now();
};

/**
 * Wraps a fetch call to prevent identical concurrent requests
 */
const deduplicatedFetch = async (url, key) => {
  if (pendingRequests.has(key)) {
    return pendingRequests.get(key);
  }

  const fetchPromise = (async () => {
    try {
      await respectRateLimit();
      const response = await fetch(url);
      const data = await response.json();
      return { status: response.status, data };
    } finally {
      pendingRequests.delete(key);
    }
  })();

  pendingRequests.set(key, fetchPromise);
  return fetchPromise;
};

const getSessionToken = async (forceReset = false) => {
  if (sessionToken && !forceReset) return sessionToken;

  try {
    const { data } = await deduplicatedFetch('https://opentdb.com/api_token.php?command=request', 'session_token');
    if (data.response_code === 0) {
      sessionToken = data.token;
      return sessionToken;
    }
  } catch (error) {
    console.error('Session token error:', error);
  }
  return null;
};

export const fetchCategories = async () => {
  if (cache.categories) return cache.categories;

  try {
    const { status, data } = await deduplicatedFetch('https://opentdb.com/api_category.php', 'categories');
    
    if (status === 429) throw new Error('Rate limit hit.');
    
    cache.categories = data.trivia_categories;
    return cache.categories;
  } catch (error) {
    console.error('Categories fetch error:', error);
    throw error;
  }
};

export const fetchQuestions = async (categoryId, difficulty = 'medium') => {
  const cacheKey = `questions-${categoryId}-${difficulty}`;
  if (cache[cacheKey]) return cache[cacheKey];

  try {
    const token = await getSessionToken();
    const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple${token ? `&token=${token}` : ''}`;
    
    const { status, data } = await deduplicatedFetch(url, cacheKey);
    
    if (data.response_code === 5 || status === 429) {
      throw new Error('Rate limit reached. Please wait.');
    }
    
    if (data.response_code === 4) {
      await getSessionToken(true);
      return fetchQuestions(categoryId, difficulty);
    }
    
    if (data.response_code !== 0) {
      throw new Error('API Error');
    }
    
    cache[cacheKey] = data.results;
    return data.results;
  } catch (error) {
    console.error('Questions fetch error:', error);
    throw error;
  }
};

