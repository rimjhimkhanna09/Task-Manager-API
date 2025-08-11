import React from 'react';
import { motion } from 'framer-motion';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="task-list"
    >
      {tasks.map((task) => (
        <motion.div
          key={task._id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          className={`task-item ${task.completed ? 'completed' : ''}`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task._id)}
          />
          <span>{task.title}</span>
          <button onClick={() => onDelete(task._id)}>
            Delete
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TaskList;
