import React, { useState, useEffect } from 'react';
import TaskManager from './components/TaskManager';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Set based on system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      </header>
      <main className="app-main">
        <TaskManager />
      </main>
    </div>
  );
}

export default App;
