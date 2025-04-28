const express = require('express');
const mongoose = require('../db');
const router = express.Router();

const schema = new mongoose.Schema({
    title: String,
    description: String,
    technologies: Array,
    github_link: String,
    link: String,
    image: String
});

const Project = mongoose.model('Project', schema);

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({message: 'Failed to fetch projects'});
    }
});

module.exports = router;