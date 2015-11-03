var express = require('express');
var db = require('./database');

var app = express();

var numHits = 0;

app.get('/', function (req, res) {
  res.send('This is the server for OpenPage.');
});

app.get('/add', function (req, res) {
  numHits++;
  res.send('' + numHits);
});

app.get('/catalog', function (req, res) {
  res.send({
    "data":"[123, 124, 125]",
    "data2":"[123, 124, 126]"
  });
});

app.get('/book/:id', function (req, res) {
  res.send({
    "title": "Biology",
    "author": "Author",
    "edition": "2nd",
    "IBSN": "123"
  });
});

app.get('/all_books', function (req, res) {
  db.getAllBooks(res);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
