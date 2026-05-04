import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchQuestions } from '../utils/api';
import { shuffleArray } from '../utils/helpers';
import QuestionCard from '../components/QuestionCard';
import ResultScreen from '../components/ResultScreen';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';
import LoadingSpinner from '../components/LoadingSpinner';
import { ArrowLeft, AlertCircle, RefreshCw } from 'lucide-react';

const Quiz = ({ category, onBack }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const loadQuestions = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchQuestions(category.id);
      setQuestions(data);
      setCurrentIndex(0);
      setScore(0);
      setShowResult(false);
    } catch (err) {
      setError('Failed to fetch questions. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [category.id]);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  useEffect(() => {
    if (questions.length > 0 && currentIndex < questions.length) {
      const currentQuestion = questions[currentIndex];
      const options = shuffleArray([
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      ]);
      setShuffledOptions(options);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  }, [currentIndex, questions]);

  const handleAnswer = (answer) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    if (answer === questions[currentIndex].correct_answer) {
      setScore(prev => prev + 1);
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const handleTimeUp = () => {
    if (isAnswered) return;
    handleAnswer(null); // Mark as incorrect
  };

  if (loading) return <LoadingSpinner message={`Preparing ${category.name} Quiz...`} />;

  if (error) {
    return (
      <div className="error-quiz glass-card">
        <AlertCircle size={48} color="var(--error)" />
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <div className="error-actions">
          <button className="btn btn-primary" onClick={loadQuestions}>
            <RefreshCw size={18} /> Retry
          </button>
          <button className="btn btn-outline" onClick={onBack}>
            Back to Home
          </button>
        </div>
        <style jsx>{`
          .error-quiz {
            max-width: 500px;
            margin: 4rem auto;
            padding: 3rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .error-actions { display: flex; gap: 1rem; }
        `}</style>
      </div>
    );
  }

  if (showResult) {
    return (
      <ResultScreen 
        score={score} 
        total={questions.length} 
        categoryName={category.name}
        onRestart={loadQuestions}
        onHome={onBack}
      />
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-header-left">
          <button className="back-btn" onClick={onBack}>
            <ArrowLeft size={24} />
            <span>Exit Quiz</span>
          </button>
          <div className="brand-divider"></div>
          <div className="brand-logo mini">Q</div>
        </div>
        <div className="quiz-category-badge">
          {category.name}
        </div>
        <div className="quiz-score-badge">
          Score: {score}
        </div>
      </div>

      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <Timer 
        duration={15} 
        onTimeUp={handleTimeUp} 
        isActive={!isAnswered && !showResult} 
      />

      <AnimatePresence mode="wait">
        <QuestionCard
          key={currentIndex}
          question={currentQuestion.question}
          options={shuffledOptions}
          correctAnswer={currentQuestion.correct_answer}
          selectedAnswer={selectedAnswer}
          onSelect={handleAnswer}
          isAnswered={isAnswered}
        />
      </AnimatePresence>

      <style jsx>{`
        .quiz-container {
          padding-bottom: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .quiz-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          margin-top: 1rem;
        }

        .quiz-header-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .brand-divider {
          width: 1px;
          height: 24px;
          background: var(--glass-border);
        }

        .brand-logo.mini {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: white;
          font-weight: 800;
          font-size: 1.1rem;
          box-shadow: 0 4px 12px var(--primary-glow);
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-family: inherit;
          font-weight: 600;
          transition: color 0.2s;
        }

        .back-btn:hover {
          color: var(--text);
        }

        .quiz-category-badge {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-weight: 600;
          font-size: 0.9rem;
          border: 1px solid var(--glass-border);
        }

        .quiz-score-badge {
          font-weight: 700;
          color: var(--primary);
        }

        @media (max-width: 640px) {
          .quiz-header {
            flex-wrap: wrap;
            gap: 1rem;
          }
          .quiz-category-badge { order: 3; width: 100%; text-align: center; }
        }
      `}</style>
    </div>
  );
};

export default Quiz;
