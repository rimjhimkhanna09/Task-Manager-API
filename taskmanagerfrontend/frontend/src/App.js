import React, { useState } from "react";
import TaskList from "./components/tasklist";
import TaskForm from "./components/taskform";

function App() {
  const [currentTask, setCurrentTask] = useState(null);

  const handleEdit = (task) => setCurrentTask(task);
  const handleFormSubmit = () => setCurrentTask(null);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm task={currentTask} onFormSubmit={handleFormSubmit} />
      <TaskList onEdit={handleEdit} />
    </div>
  );
}

export default App;
