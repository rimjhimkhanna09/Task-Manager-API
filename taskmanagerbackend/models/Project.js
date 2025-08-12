const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    status: {
        type: String,
        enum: ['planning', 'active', 'completed', 'on_hold', 'cancelled'],
        default: 'planning'
    },
    startDate: { type: Date },
    endDate: { type: Date },
    teamMembers: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        role: { type: String },
        permissions: { type: Map, of: Boolean }
    }],
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    labels: [{
        name: { type: String },
        color: { type: String }
    }],
    milestones: [{
        title: { type: String },
        date: { type: Date },
        status: {
            type: String,
            enum: ['planned', 'completed', 'missed']
        },
        description: { type: String }
    }],
    files: [{
        filename: { type: String },
        url: { type: String },
        type: { type: String },
        uploadedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        uploadedAt: { type: Date, default: Date.now }
    }],
    customFields: { type: Map, of: String },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
