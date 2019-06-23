const { validationResult } = require('express-validator/check');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'Fisrt name',
        content: 'this is the first post!',
        imageUrl: '../images/cat.jpg',
        creator: {
          name: 'may'
        },
        createdAt: new Date()
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: 'Validation fail, entered data is incorest.', errors: errors.array() });
  }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: 'images/cat.jpg',
    creator: {
      name: 'may'
    }
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Post create successfully!',
        post: result
      });
    })
    .catch((err) => console.log(err));
};
