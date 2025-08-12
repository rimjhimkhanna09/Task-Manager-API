import React from 'react';
import { motion } from 'framer-motion';

const EnhancedTaskList = ({ tasks, projects, onUpdateTask }) => {
  const getPriorityColor = (priority) => {
    const colors = {
      low: '#2ecc71',
      medium: '#f1c40f',
      high: '#e74c3c',
      urgent: '#c0392b'
    };
    return colors[priority] || '#95a5a6';
  };

  const getStatusIcon = (status) => {
    const icons = {
      todo: '📝',
      in_progress: '🔄',
      blocked: '🚫',
      completed: '✅'
    };
    return icons[status] || '📝';
  };

  const handleStatusChange = (taskId, newStatus) => {
    // Update the task's status
    onUpdateTask(taskId, { status: newStatus });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="enhanced-task-list"
    >
      {tasks.map((task) => (
        <motion.div
          key={task._id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}
        >
          <div className="task-header">
            <span className="status-icon">{getStatusIcon(task.status)}</span>
            <h3>{task.title}</h3>
            <div className="priority-badge" style={{ backgroundColor: getPriorityColor(task.priority) }}>
              {task.priority}
            </div>
          </div>

          {task.description && (
            <p className="task-description">{task.description}</p>
          )}

          <div className="task-meta">
            {task.dueDate && (
              <div className="meta-item">
                <span className="icon">📅</span>
                <span>{new Date(task.dueDate).toLocaleDateString()}</span>
              </div>
            )}
            
            {task.labels && task.labels.length > 0 && (
              <div className="meta-item">
                <span className="icon">🏷️</span>
                <div className="labels">
                  {task.labels.map((label) => (
                    <span key={label} className="label-badge">{label}</span>
                  ))}
                </div>
              </div>
            )}

            {task.assignees && task.assignees.length > 0 && (
              <div className="meta-item">
                <span className="icon">👥</span>
                <div className="assignees">
                  {task.assignees.map((assignee) => (
                    <span key={assignee._id} className="assignee-badge">
                      {assignee.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {task.subtasks && task.subtasks.length > 0 && (
              <div className="meta-item">
                <span className="icon">📜</span>
                <span>{task.subtasks.length} Subtasks</span>
              </div>
            )}

            {task.notifications && task.notifications.length > 0 && (
              <div className="meta-item">
                <span className="icon">🔔</span>
                <span>{task.notifications.length} Notifications</span>
              </div>
            )}
          </div>

          <div className="task-actions">
            <button 
              onClick={() => handleStatusChange(task._id, 'completed')}
              className="status-button"
            >
              Mark Complete
            </button>
            <button 
              onClick={() => handleStatusChange(task._id, 'in_progress')}
              className="status-button"
            >
              Start Working
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default EnhancedTaskList;
