import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Persistence: Restore last category if needed
  useEffect(() => {
    const lastCat = localStorage.getItem('lastCategory');
    if (lastCat) {
      try {
        // We could auto-start, but better to just show it in a "Recent" section
        // For now, let's just keep it simple as per requirements
      } catch (e) {}
    }
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    localStorage.setItem('lastCategory', JSON.stringify(category));
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="app-wrapper">
      <main className="container">
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Home onSelectCategory={handleSelectCategory} />
            </motion.div>
          ) : (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Quiz 
                category={selectedCategory} 
                onBack={handleBackToHome} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="footer container">
        <p>&copy; 2026 QuizMaster. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .navbar {
          padding-top: 2rem;
          padding-bottom: 1rem;
          display: flex;
          justify-content: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: white;
          font-weight: 800;
          font-size: 1.5rem;
          box-shadow: 0 4px 15px var(--primary-glow);
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 400;
          letter-spacing: -0.02em;
        }

        .logo-text .bold {
          font-weight: 700;
        }

        main {
          flex: 1;
        }

        .footer {
          padding: 2rem;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}

export default App;
