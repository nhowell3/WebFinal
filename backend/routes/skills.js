const express = require('express');
const mongoose = require('../db');
const router = express.Router();

const schema = new mongoose.Schema({
    tool_name: String,
    logo: String
});

const Skill = mongoose.model('Skill', schema);

router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        res.status(500).json({message: 'Failed to fetch skills'});
    }
});

module.exports = router;