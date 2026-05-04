import { quizData } from '../data/quizData';

/**
 * Fetches all quiz categories from local data.
 * Mimics the previous API behavior for compatibility.
 */
export const fetchCategories = async () => {
  // Simulate a small delay for a natural feel
  await new Promise(resolve => setTimeout(resolve, 300));
  return quizData.categories.map(({ id, name }) => ({ id, name }));
};

/**
 * Fetches questions for a specific category from local data.
 * Mimics the previous API behavior for compatibility.
 */
export const fetchQuestions = async (categoryId) => {
  // Simulate a small delay for a natural feel
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const category = quizData.categories.find(c => c.id === categoryId);
  
  if (!category) {
    throw new Error('Category not found');
  }

  // Map the local data format to the format expected by the QuestionCard component
  // Local: { question, options, answer }
  // Component expects: { question, correct_answer, incorrect_answers }
  return category.questions.map(q => ({
    question: q.question,
    correct_answer: q.answer,
    incorrect_answers: q.options.filter(opt => opt !== q.answer)
  }));
};
