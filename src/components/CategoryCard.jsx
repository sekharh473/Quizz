import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const CategoryCard = ({ category, onClick }) => {
  // Map category IDs to icons for better visual appeal
  const getIcon = (id) => {
    const iconMap = {
      9: 'MessageSquare', // General Knowledge
      10: 'Book', // Entertainment: Books
      11: 'Film', // Entertainment: Film
      12: 'Music', // Entertainment: Music
      13: 'Mic2', // Entertainment: Musicals & Theatres
      14: 'Monitor', // Entertainment: Television
      15: 'Gamepad2', // Entertainment: Video Games
      16: 'Dices', // Entertainment: Board Games
      17: 'Atom', // Science & Nature
      18: 'Cpu', // Science: Computers
      19: 'Calculator', // Science: Mathematics
      20: 'Ghost', // Mythology
      21: 'Trophy', // Sports
      22: 'Globe', // Geography
      23: 'History', // History
      24: 'Users', // Politics
      25: 'Palette', // Art
      26: 'Users2', // Celebrities
      27: 'Dog', // Animals
      28: 'Car', // Vehicles
      29: 'BookOpen', // Entertainment: Comics
      30: 'Zap', // Science: Gadgets
      31: 'Tv', // Entertainment: Japanese Anime & Manga
      32: 'Play', // Entertainment: Cartoon & Animations
    };

    const iconName = iconMap[id] || 'HelpCircle';
    const IconComponent = Icons[iconName] || Icons.HelpCircle;
    return <IconComponent size={32} />;
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
        {getIcon(category.id)}
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
