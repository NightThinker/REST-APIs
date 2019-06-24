const { validationResult } = require('express-validator/check');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  // Post.find()
  //   .then((posts) => {
  //     res.status(200).json({ message: 'Fetched postes successfully.', posts: posts });
  //   })
  //   .catch((err) => {
  //     if (!err.statusCode) {
  //       err.statusCode = 500;
  //     }
  //     next(err);
  //   });
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
    console.log('TCL: exports.createPost -> errors', errors);
    console.log('error');
    const error = new Error('Validation fail, entered data is incorest.');
    error.statusCode = 422;
    throw error;
    // return res.status(422).json({ message: 'Validation fail, entered data is incorest.', errors: errors.array() });
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
      res.status(201).json({
        message: 'Post create successfully!',
        post: result
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((post) => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Post fetched.', post: post });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
