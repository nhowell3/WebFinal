const express = require('express');
const mongoose = require('../db');
const router = express.Router();

const schema = new mongoose.Schema({
    institution: String,
    degree: String,
    graduation_year: Number,
    description: String,
});

const Degree = mongoose.model('Degree', schema);

router.get('/', async (req, res) => {
    try {
        const degrees = await Degree.find();
        res.json(degrees);
    } catch (err) {
        res.status(500).json({message: 'Failed to fetch education'});
    }
});

module.exports = router;