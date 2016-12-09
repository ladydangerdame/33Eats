var express = require('express');
// generate a new express app and call it 'app'
var app = express();

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/index.html');
});







app.get('/api/posts', controllers.post.index);

app.post('/api/posts/', controllers.post.create);

app.get('/api/users', controllers.user.index);




app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
