import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000/api/tasks" });

export const getTasks = () => API.get("/");
export const createTask = (task) => API.post("/", task);
export const updateTask = (id, updatedTask) => API.put(`/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/${id}`);
