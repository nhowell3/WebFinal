require("dotenv").config();
const express = require('express');
const mongoose = require('./db');
const cors = require('cors');
const educationRouter = require('./routes/education');
const skillsRouter = require('./routes/skills');
const contactRouter = require('./routes/contact');
const projectRouter = require('./routes/projects');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/education', educationRouter);
app.use('/skills', skillsRouter);
app.use('/contact', contactRouter);
app.use('/projects', projectRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
