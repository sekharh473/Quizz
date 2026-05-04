import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>Question {current} of {total}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
      <div className="progress-track">
        <motion.div 
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      <style jsx>{`
        .progress-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto 2rem;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .progress-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          box-shadow: 0 0 10px var(--primary-glow);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default ProgressBar;
