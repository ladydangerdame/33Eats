var db = require("./models");

var postList = [{
    postTitle: 'Our First Post',
    postDate: 'December 8, 2016',
    postBody: 'hello word. Welcome to our blog. Enjoy!',
    // postUser: 'sophieluo'
}]

var userList = [{
    username: 'sophieluo',
    imgUrl: '',
    // postBody: 'hello word. Welcome to our blog. Enjoy!',
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

db.User.remove({}, function(err, user) {
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('Removed all users');
    db.User.create(userList, function(err, user) {
      if (err) { return console.log('err', err); }
      console.log('Created ' + user.length + ' users');
      process.exit();
    });
  }
});
