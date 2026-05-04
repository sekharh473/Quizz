import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const CategoryCard = ({ category, onClick }) => {
  const getLogo = (name) => {
    const logoMap = {
      'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    };

    const logoUrl = logoMap[name];
    if (logoUrl) {
      return <img src={logoUrl} alt={name} className="category-logo-img" />;
    }
    
    return <Icons.HelpCircle size={32} />;
  };

  return (
    <motion.div
      className="category-card glass-card"
      whileHover={{ scale: 1.05, y: -5, boxShadow: '0 0 20px var(--primary-glow)' }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(category)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="category-icon-wrapper">
        {getLogo(category.name)}
      </div>

      <h3 className="category-name">{category.name}</h3>
      <div className="category-glow"></div>
      
      <style jsx>{`
        .category-card {
          padding: 2.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          height: 200px;
          gap: 1.25rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .category-icon-wrapper {
          color: var(--primary);
          background: rgba(255, 255, 255, 0.03);
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          border: 1px solid var(--glass-border);
          transition: all 0.3s ease;
        }
        
        .category-card:hover .category-icon-wrapper {
          color: white;
          background: var(--primary);
          transform: rotate(-5deg) scale(1.1);
          box-shadow: 0 0 20px var(--primary-glow);
        }
        
        .category-logo-img {
          width: 38px;
          height: 38px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        
        .category-card:hover .category-logo-img {
          transform: scale(1.1);
        }

        .category-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
          z-index: 1;
          line-height: 1.2;
        }
        
        .category-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, var(--primary-glow) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .category-card:hover .category-glow {
          opacity: 0.2;
        }
      `}</style>
    </motion.div>
  );
};

export default CategoryCard;
