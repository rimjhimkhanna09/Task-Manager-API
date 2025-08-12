import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EnhancedTaskList from './EnhancedTaskList';
import axios from 'axios';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
    dueDate: '',
    labels: [],
    assignees: [],
    subtasks: [],
    notifications: []
  });

  const API_URL = 'http://localhost:8000';

  // Fetch data on component mount
  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks`);
    setTasks(response.data);
  };

  const fetchProjects = async () => {
    const response = await axios.get(`${API_URL}/projects`);
    setProjects(response.data);
  };

  const handleTaskUpdate = async (taskId, updates) => {
    await axios.patch(`${API_URL}/tasks/${taskId}/status`, { status: updates.status });
    fetchTasks();
  };

  const handleTaskDelete = async (taskId) => {
    await axios.delete(`${API_URL}/tasks/${taskId}`);
    fetchTasks();
  };

  const handleAddTask = async () => {
    if (!newTask.title) {
      alert('Please enter a task title');
      return;
    }

    try {
      await axios.post(`${API_URL}/tasks`, {
        title: newTask.title,
        description: newTask.description || '',
        status: newTask.status,
        priority: newTask.priority,
        dueDate: newTask.dueDate,
        projectId: selectedProject
      });
      setNewTask({
        title: '',
        description: '',
        status: 'todo',
        priority: 'medium',
        dueDate: '',
        labels: [],
        assignees: [],
        subtasks: [],
        notifications: []
      });
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesProject = !selectedProject || task.projectId === selectedProject;
    const matchesStatus = !statusFilter || task.status === statusFilter;
    const matchesPriority = !priorityFilter || task.priority === priorityFilter;
    return matchesProject && matchesStatus && matchesPriority;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="task-manager"
    >
      <div className="task-manager-header">
        <select
          className="project-selector"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <option value="">All Projects</option>
          {projects.map((project) => (
            <option key={project._id} value={project._id}>
              {project.name}
            </option>
          ))}
        </select>
      </div>

      <div className="task-filter-bar">
        <div className="status-filters">
          <button
            className={`status-filter ${statusFilter === 'todo' ? 'active' : ''}`}
            onClick={() => setStatusFilter(statusFilter === 'todo' ? '' : 'todo')}
          >
            Todo
          </button>
          <button
            className={`status-filter ${statusFilter === 'in_progress' ? 'active' : ''}`}
            onClick={() => setStatusFilter(statusFilter === 'in_progress' ? '' : 'in_progress')}
          >
            In Progress
          </button>
          <button
            className={`status-filter ${statusFilter === 'completed' ? 'active' : ''}`}
            onClick={() => setStatusFilter(statusFilter === 'completed' ? '' : 'completed')}
          >
            Completed
          </button>
        </div>

        <div className="priority-filters">
          <button
            className={`priority-filter ${priorityFilter === 'low' ? 'active' : ''}`}
            onClick={() => setPriorityFilter(priorityFilter === 'low' ? '' : 'low')}
          >
            Low
          </button>
          <button
            className={`priority-filter ${priorityFilter === 'medium' ? 'active' : ''}`}
            onClick={() => setPriorityFilter(priorityFilter === 'medium' ? '' : 'medium')}
          >
            Medium
          </button>
          <button
            className={`priority-filter ${priorityFilter === 'high' ? 'active' : ''}`}
            onClick={() => setPriorityFilter(priorityFilter === 'high' ? '' : 'high')}
          >
            High
          </button>
          <button
            className={`priority-filter ${priorityFilter === 'urgent' ? 'active' : ''}`}
            onClick={() => setPriorityFilter(priorityFilter === 'urgent' ? '' : 'urgent')}
          >
            Urgent
          </button>
        </div>
      </div>

      <EnhancedTaskList
        tasks={filteredTasks}
        projects={projects}
        onUpdateTask={handleTaskUpdate}
      />

      <div className="task-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            placeholder="Enter task title"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            placeholder="Add task description"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            value={newTask.dueDate}
            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
          />
        </div>

        <button className="submit-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <div className="task-list-container">
        <EnhancedTaskList
          tasks={filteredTasks}
          projects={projects}
          onUpdateTask={handleTaskUpdate}
        />
      </div>
    </motion.div>
  );
};

export default TaskManager;
