exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: 'Fisrt name',
        content: 'this is the first post!'
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