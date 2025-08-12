const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Task = require('../models/Task');
const auth = require('../middlewares/auth');

// Create a new project
router.post('/', auth, async (req, res) => {
    try {
        const project = new Project({
            ...req.body,
            owner: req.user._id
        });
        await project.save();
        res.status(201).send(project);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().populate(['owner', 'tasks']);
        res.send(projects);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a single project
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id)
            .populate(['owner', 'tasks', 'teamMembers.user']);
        if (!project) {
            return res.status(404).send();
        }
        res.send(project);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update project
router.patch('/:id', auth, async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.params.id, owner: req.user._id },
            req.body,
            { new: true, runValidators: true }
        );
        if (!project) {
            return res.status(404).send();
        }
        res.send(project);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete project
router.delete('/:id', auth, async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({
            _id: req.params.id,
            owner: req.user._id
        });
        if (!project) {
            return res.status(404).send();
        }
        res.send(project);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
