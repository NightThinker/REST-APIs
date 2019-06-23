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
  const title = req.body.title;
  const content = req.body.content;
  //Create Post in DB
  res.status(201).json({
    message: 'Post create successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};
