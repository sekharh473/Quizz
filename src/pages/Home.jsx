import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchCategories } from '../utils/api';
import CategoryCard from '../components/CategoryCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { AlertCircle, RefreshCw } from 'lucide-react';

const Home = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchCategories();
      setCategories(data);
    } catch (err) {
      setError('Could not load categories. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  if (loading) return <LoadingSpinner message="Fetching Categories..." />;

  if (error) {
    return (
      <div className="error-container glass-card">
        <AlertCircle size={48} className="error-icon" />
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button className="btn btn-primary" onClick={loadCategories}>
          <RefreshCw size={18} /> Retry
        </button>
        <style jsx>{`
          .error-container {
            max-width: 500px;
            margin: 4rem auto;
            padding: 3rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .error-icon { color: var(--error); }
        `}</style>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="header-split">
        <motion.div 
          className="header-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="brand" onClick={() => window.location.reload()}>
            <div className="brand-logo">Q</div>
            <span className="brand-name">QuizMaster</span>
          </div>
          <h2 className="section-title">Explore Categories</h2>
          <div className="section-accent"></div>
        </motion.div>

        <motion.div 
          className="header-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="hero-title">Challenge Your <span className="gradient-text">Mind</span></h1>
          <p className="hero-subtitle">Test your knowledge across 20+ categories and climb the global leaderboards.</p>
        </motion.div>
      </div>

      <motion.div 
        className="categories-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05
            }
          }
        }}
      >
        {categories.map((category) => (
          <CategoryCard 
            key={category.id} 
            category={category} 
            onClick={onSelectCategory}
          />
        ))}
      </motion.div>

      <style jsx>{`
        .home-container {
          padding-bottom: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .header-split {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 4rem;
          margin-bottom: 3rem;
          margin-top: 2rem;
          padding: 0 1rem;
        }

        .header-left {
          flex: 0 0 auto;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          cursor: pointer;
        }

        .brand-logo {
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

        .brand-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text);
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
          color: var(--text);
          letter-spacing: -0.04em;
        }

        .section-accent {
          height: 4px;
          width: 260px;
          background: linear-gradient(90deg, var(--primary), transparent);
          margin-top: 1.5rem;
          border-radius: 2px;
        }

        .header-right {
          flex: 1;
          max-width: 500px;
          text-align: right;
        }

        .hero-title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Grid System: 4-3-2-1 */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          padding: 0 1rem;
        }

        @media (max-width: 1024px) {
          .categories-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .section-title {
            font-size: 2.75rem;
          }
        }

        @media (max-width: 768px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .header-split {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            margin-bottom: 2.5rem;
            margin-top: 1.5rem;
            gap: 1.5rem;
          }
          .header-right {
            text-align: left;
            max-width: 100%;
          }
          .section-title br {
            display: none;
          }
          .section-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 1.75rem;
          }
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
