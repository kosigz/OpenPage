var MongoClient = require('mongodb').MongoClient;

// Database connection.
var database = null;

// Collections.

// A Collection of Books.
var books;
/* Books
- book_id
- Title
- Author
- ISBN
*/

// A Collection of Users.
var users;
/* Items
- user_id
- first_name
- last_name
- email
- university_id
- last_login
*/

// Connect to Mongo Database.
MongoClient.connect("mongodb://localhost:27017/openpage", function (err, db) {
  if(err) throw err;
  console.log("Database connection successful.");
  database = db;
  initCollectionReferences();
});


// Create references to our collections.
function initCollectionReferences () {
  database.collection('books', function (err, collection) {
    if (err) throw err;
    books = collection;
  });
  database.collection('users', function (err, collection) {
    if (err) throw err;
    users = collection;
  });
}

// ... 
exports.getAllBooks = function (res) {
  return books.find().toArray(function (err, data) {
    if (err) throw err;
    res.send(data);
  });
}

exports.getBooksByName = function (title, res) {
  var regex = new RegExp('^' + title.toLowerCase(), 'i');
  return books.find({'title': {$regex: regex} }).toArray(function (err, data) {
    if (err) throw err;
    res.send(data);
  });
}