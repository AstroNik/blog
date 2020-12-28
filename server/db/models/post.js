const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    postID: Number,
    title: String,
    dateTime: Date,
    content: String,
    tags: String
});

module.exports = mongoose.model('Posts', postSchema);