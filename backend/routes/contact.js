const express = require('express');
const mongoose = require('../db');
const router = express.Router();

const schema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: String,
});

const Contact = mongoose.model('Contact', schema);

router.post('/', async (req, res) => {
    try {
        const {name, email, message} = req.body;
        const date = new Date();
        const createdAt = date.toDateString();
        const newContact = new Contact({name, email, message, createdAt});
        await newContact.save();
        res.json(newContact);
    } catch (err) {
        res.status(500).json({message: 'Failed to post message'});
    }
});

module.exports = router;
