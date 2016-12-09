var mongoose = require("mongoose");
// var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
User = require('./user');

// var CommentsSchema = new Schema({
//     user: String,
//     commentBody: String
// });

var PostSchema = new Schema({
  postTitle: String,
  postDate: String,
  postBody: String,
  postUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
  // postComment: [CommentsSchema]
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;
