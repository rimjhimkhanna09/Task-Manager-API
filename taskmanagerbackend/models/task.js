const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { 
        type: String, 
        enum: ['todo', 'in_progress', 'completed'], 
        default: 'todo' 
    },
    priority: { 
        type: String, 
        enum: ['low', 'medium', 'high'], 
        default: 'medium' 
    },
    dueDate: { type: Date }
}, {
    timestamps: true
});

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);
module.exports = Task;