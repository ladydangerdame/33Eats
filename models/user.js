var mongoose = require("mongoose");
// var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  // email: String,
  // passwordDigest: String,
  username: String,
  imgUrl: String,
  posts: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
