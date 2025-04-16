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

// Route Examples

// app.get('/posts', async (req, res) => {
//     try {
//         const posts = await Post.find();
//         res.json(posts);
//     } catch (err) {
//         res.status(500).json({message: 'Failed to fetch posts'});
//     }
// });

// app.post('/posts', async (req, res) => {
//     try {
//         const {title, body} = req.body;
//         const date = new Date();
//         const createdAt = date.toDateString();
//         const newPost = new Post({title, body, createdAt});
//         await newPost.save();
//         res.json(newPost);
//     } catch (err) {
//         res.status(500).json({message: 'Failed to save post!'});
//     }
// });

// app.put('/posts',  async (req, res) => {
//     try {
//         const {_id, title, body, createdAt} = req.body;
//         await Post.updateOne({_id: _id}, {title: title, body: body, createdAt: createdAt});
//         const posts = await Post.find();
//         res.json(posts);
        
//     } catch (err) {
//         res.status(500).json({message: 'Failed to update post'});
//     }
// })

// app.delete('/posts/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         await Post.deleteOne({_id: id});
//         const posts = await Post.find();
//         res.json(posts);
//     } catch (err) {
//         res.status(500).json({message: 'Failed to delete post'});
//     }
// })

