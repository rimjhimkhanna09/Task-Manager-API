import React, { useState } from "react";
import { createTask, updateTask } from "../api";

function TaskForm({ task, onFormSubmit }) {
  const [formData, setFormData] = useState(task || { title: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._id) {
      await updateTask(formData._id, formData);
    } else {
      await createTask(formData);
    }
    onFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <button type="submit">{formData._id ? "Update Task" : "Create Task"}</button>
    </form>
  );
}

export default TaskForm;
