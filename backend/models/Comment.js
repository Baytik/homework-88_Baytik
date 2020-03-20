const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;