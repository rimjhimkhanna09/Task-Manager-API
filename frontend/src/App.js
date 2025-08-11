import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      _id: Date.now().toString(),
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task._id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task._id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <header className="app-header">
        <h1>Task Manager</h1>
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      </header>
      <main className="app-main">
        <TaskForm onAdd={addTask} />
        <TaskList 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleTask} 
        />
      </main>
    </div>
  );
}

export default App;
