const {Schema, createConnection } = require('mongoose');
const connection = createConnection(process.env.DBSTRING)

const postSchema = new Schema({
    postID: Int16Array,
    title: String,
    dateTime: Date,
    content: String,
    tags: String
});

const Post = connection.model('Posts', postSchema)

module.exports = {
    Post
}