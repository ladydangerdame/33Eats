/************
 * DATABASE *
 ************/

var db = require('../models');

function index(req, res) {
   db.Post.find({}, function(err, allPosts) {
     res.json(allPosts);
   });
 }

// export public methods here
module.exports = {
  index: index,
};
