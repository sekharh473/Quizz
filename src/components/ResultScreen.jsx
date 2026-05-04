import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, RotateCcw, Home, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

const ResultScreen = ({ score, total, onRestart, onHome, categoryName }) => {
  const percentage = (score / total) * 100;
  const highScore = localStorage.getItem(`highScore_${categoryName}`) || 0;
  const isNewHighScore = score > highScore;

  useEffect(() => {
    if (isNewHighScore) {
      localStorage.setItem(`highScore_${categoryName}`, score);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#f43f5e']
      });
    } else if (percentage >= 70) {
      confetti({
        particleCount: 80,
        spread: 50,
        origin: { y: 0.7 }
      });
    }
  }, [score, categoryName, isNewHighScore, percentage]);

  const getMessage = () => {
    if (percentage === 100) return "Perfect Score! You're a Genius! 🏆";
    if (percentage >= 80) return "Amazing Job! Almost Perfect! 🌟";
    if (percentage >= 60) return "Well Done! Great Performance! 👍";
    if (percentage >= 40) return "Not Bad! Keep Practicing! 💪";
    return "Keep Trying! Better Luck Next Time! 😊";
  };

  return (
    <motion.div 
      className="result-screen glass-card"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className="icon-badge">
        <Trophy size={48} className="trophy-icon" />
      </div>
      
      <h1>Quiz Completed!</h1>
      <p className="category-info">{categoryName}</p>
      
      <div className="score-display">
        <div className="score-main">
          <span className="score-num">{score}</span>
          <span className="score-total">/ {total}</span>
        </div>
        <p className="message">{getMessage()}</p>
      </div>

      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-label">Accuracy</span>
          <span className="stat-value">{percentage}%</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">High Score</span>
          <span className="stat-value">
            <Star size={14} className="star-icon" /> {isNewHighScore ? score : highScore}
          </span>
        </div>
      </div>

      {isNewHighScore && (
        <motion.div 
          className="new-badge"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          NEW HIGH SCORE!
        </motion.div>
      )}

      <div className="actions">
        <button className="btn btn-primary" onClick={onRestart}>
          <RotateCcw size={18} /> Play Again
        </button>
        <button className="btn btn-outline" onClick={onHome}>
          <Home size={18} /> Home
        </button>
      </div>

      <style jsx>{`
        .result-screen {
          padding: 3rem;
          text-align: center;
          max-width: 500px;
          margin: 2rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .icon-badge {
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          color: var(--secondary);
        }

        .category-info {
          color: var(--text-muted);
          font-size: 1rem;
          margin-top: -1rem;
        }

        .score-display {
          margin: 1rem 0;
        }

        .score-main {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .score-total {
          font-size: 1.5rem;
          color: var(--text-muted);
          margin-left: 0.5rem;
          -webkit-text-fill-color: var(--text-muted);
        }

        .message {
          font-size: 1.25rem;
          font-weight: 500;
          margin-top: 1rem;
          color: var(--text);
        }

        .stats-row {
          display: flex;
          gap: 2rem;
          width: 100%;
          margin-top: 1rem;
        }

        .stat-item {
          flex: 1;
          background: rgba(255, 255, 255, 0.03);
          padding: 1rem;
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-value {
          font-size: 1.25rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .star-icon {
          color: #fbbf24;
          fill: #fbbf24;
        }

        .new-badge {
          background: var(--accent);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          box-shadow: 0 0 15px rgba(244, 63, 94, 0.4);
        }

        .actions {
          display: flex;
          gap: 1rem;
          width: 100%;
          margin-top: 1rem;
        }

        .actions button {
          flex: 1;
        }

        .trophy-icon {
          filter: drop-shadow(0 0 10px var(--secondary));
        }
      `}</style>
    </motion.div>
  );
};

export default ResultScreen;
