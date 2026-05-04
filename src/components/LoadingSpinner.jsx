import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-content">
        <motion.div 
          className="spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          {message}
        </motion.p>
      </div>

      <style jsx>{`
        .spinner-overlay {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          width: 100%;
        }

        .spinner-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(255, 255, 255, 0.1);
          border-top-color: var(--primary);
          border-radius: 50%;
        }

        p {
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
