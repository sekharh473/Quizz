import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { decodeHTML } from '../utils/helpers';

const QuestionCard = ({ 
  question, 
  options, 
  selectedAnswer, 
  correctAnswer, 
  onSelect,
  isAnswered 
}) => {
  return (
    <motion.div 
      className="question-card glass-card"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="question-text">{decodeHTML(question)}</h2>
      
      <div className="options-grid">
        {options.map((option, index) => {
          const isCorrect = option === correctAnswer;
          const isSelected = option === selectedAnswer;
          
          let statusClass = '';
          if (isAnswered) {
            if (isCorrect) statusClass = 'correct';
            else if (isSelected) statusClass = 'incorrect';
          }

          return (
            <motion.button
              key={index}
              className={`option-btn ${statusClass} ${isSelected ? 'selected' : ''}`}
              onClick={() => !isAnswered && onSelect(option)}
              disabled={isAnswered}
              whileHover={!isAnswered ? { scale: 1.02, x: 5 } : {}}
              whileTap={!isAnswered ? { scale: 0.98 } : {}}
            >
              <span className="option-label">{String.fromCharCode(65 + index)}</span>
              <span className="option-text">{decodeHTML(option)}</span>
              
              {isAnswered && isCorrect && (
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  className="status-icon"
                >
                  ✓
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      <style jsx>{`
        .question-card {
          padding: 2.5rem;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }

        .question-text {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          line-height: 1.4;
          color: var(--text);
          text-align: center;
        }

        .options-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .option-btn {
          padding: 1.25rem 1.5rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--text);
          text-align: left;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
          font-family: inherit;
        }

        .option-label {
          background: rgba(255, 255, 255, 0.1);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .option-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--primary);
        }

        .option-btn.selected {
          border-color: var(--primary);
          background: rgba(99, 102, 241, 0.1);
        }

        .option-btn.correct {
          background: rgba(16, 185, 129, 0.2);
          border-color: var(--success);
          color: white;
        }

        .option-btn.incorrect {
          background: rgba(239, 68, 68, 0.2);
          border-color: var(--error);
          color: white;
        }

        .status-icon {
          position: absolute;
          right: 1.5rem;
          color: var(--success);
          font-weight: bold;
          font-size: 1.2rem;
        }

        @media (min-width: 640px) {
          .options-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default QuestionCard;
