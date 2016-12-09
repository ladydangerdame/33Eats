var db = require('../models');

function index(req, res) {
   db.Post.find({}, function(err, allPosts) {
     res.json(allPosts);
   });
 }

 function create(req, res) {
  db.Post.create(req.body, function(err, post) {
    if (err) { console.log('error', err); }
    res.json(post);
  });
}

// export public methods here
module.exports = {
  index: index,
  create: create
};
