import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Timer = ({ duration, onTimeUp, isActive }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration, isActive]);

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isActive, onTimeUp]);

  const progress = (timeLeft / duration) * 100;
  const color = timeLeft < 5 ? 'var(--error)' : 'var(--primary)';

  return (
    <div className="timer-container">
      <div className="timer-circle">
        <svg viewBox="0 0 36 36">
          <path
            className="timer-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <motion.path
            className="timer-progress"
            stroke={color}
            strokeDasharray={`${progress}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span className="timer-text" style={{ color }}>{timeLeft}</span>
      </div>

      <style jsx>{`
        .timer-container {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .timer-circle {
          width: 80px;
          height: 80px;
          position: relative;
        }

        .timer-circle svg {
          transform: rotate(-90deg);
        }

        .timer-bg {
          fill: none;
          stroke: rgba(255, 255, 255, 0.1);
          stroke-width: 3;
        }

        .timer-progress {
          fill: none;
          stroke-width: 3;
          stroke-linecap: round;
          transition: stroke 0.3s ease;
        }

        .timer-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.5rem;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default Timer;
