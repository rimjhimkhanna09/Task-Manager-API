import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ isDark, onToggle }) => {
  const SunIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="6" fill="#ffd700"/>
      <circle cx="12" cy="12" r="4" fill="white"/>
      <circle cx="12" cy="12" r="2" fill="#ffd700"/>
    </svg>
  );

  const MoonIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="#f0f0f0"/>
      <path d="M12 15c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#2c3e50"/>
    </svg>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="theme-toggle"
      onClick={onToggle}
      style={{
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        cursor: 'pointer',
        background: 'var(--card-background)',
        boxShadow: '0 2px 5px var(--shadow-color)',
        transition: 'all 0.3s ease'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          transition: 'all 0.3s ease'
        }}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </motion.div>
    </motion.div>
  );
};

export default ThemeToggle;
