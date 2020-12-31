const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    postId: Number,
    title: String,
    date: Date,
    content: String,
    tags: String,
    imgLink: String
}, {
    versionKey: false
});

module.exports = mongoose.model('Posts', postSchema);