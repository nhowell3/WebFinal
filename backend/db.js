const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB error', err));

module.exports = mongoose;