var db = require("./models");

var postList = [{
    postTitle: 'Our First Post',
    postDate: 'December 8, 2016',
    postBody: 'hello word. Welcome to our blog. Enjoy!',
    // postUser: 'sophieluo'
}]


db.Post.remove({}, function(err, post) {
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('Removed all posts');
    db.Post.create(postList, function(err, post) {
      if (err) { return console.log('err', err); }
      console.log('Created ' + post.length + ' posts');
      process.exit();
    });
  }
});
