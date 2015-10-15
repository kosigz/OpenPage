var express = require('express');
var app = express();

var numHits = 0;

app.get('/', function (req, res) {
  res.send('This is the server for OpenPage.');
});

app.get('/add', function (req, res) {
  numHits++;
  res.send('' + numHits);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});