const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
    const comment = await Comment.find({post: req.query.post}).populate('post');
    res.send(comment)
});

router.post('/', auth, async (req, res) => {
    console.log(req.body);
    const user = req.user;
    const object = {
        userId: user._id,
        comment: req.body.comment,
        post: req.body.post
    };
    const comment = new Comment(object);

    try {
        await comment.save();
        return res.send(comment);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;