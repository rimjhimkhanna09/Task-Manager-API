import React, { useState } from 'react';
import { getTasks, createTask, deleteTask } from '../api';

const TaskManager = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    try {
      setLoading(true);
      await createTask({ 
        title, 
        description,
        priority,
        status: 'todo' 
      });
      setTitle('');
      setDescription('');
      fetchTasks();
    } catch (error) {
      console.error('Error creating task:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="task-manager-container">
      <div className="title-section">
        <h1>Task Manager</h1>
      </div>

      <div className="task-form-section">
        <h2>Create Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              required
            />
          </div>

          <div className="form-group">
            <label>Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Task'}
          </button>
        </form>
      </div>

      <div className="task-list-section">
        <h2>Task List</h2>
        <div className="task-list">
          {tasks.map((task) => (
            <div key={task._id} className="task-item">
              <div className="task-content">
                <div className="task-header">
                  <h3>{task.title}</h3>
                  <span className={`priority-tag ${task.priority}`}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </span>
                </div>
                <p>{task.description}</p>
                <div className="task-meta">
                  <p className="task-status">Status: {task.status}</p>
                  <p className="task-date">Created: {new Date(task.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <button 
                className="delete-btn" 
                onClick={() => handleDelete(task._id)}
                disabled={loading}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
