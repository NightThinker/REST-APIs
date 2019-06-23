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
