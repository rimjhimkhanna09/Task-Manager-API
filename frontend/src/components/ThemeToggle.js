import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="theme-toggle"
      onClick={onToggle}
    >
      {isDark ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="sun-icon"
        >
          ☀️
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="moon-icon"
        >
          🌙
        </motion.div>
      )}
    </motion.div>
  );
};

export default ThemeToggle;
