var express = require('express');
var bodyParser = require('body-parser');

var books = ['doom', 'grapes of wrath', '1984'];

var app = express();


// always parse http body as json
// assings result to req.body
// 1. first thing that happens when a request is received
app.use(bodyParser.json());

// 2.
app.get('/books', function(req, res, next){
  res.send(books);
});

//3.
// must be a http post method (app.get)
// if path == '/books'
// then run the callback function
// notice that the functions are not being called they registered for express to call when express receives a request

app.post('/books', function(req, res, next){
  //{req.body} = { name: 'three little pigs'}
  books.push(req.body.name);
  res.send(books);
})


 // {
 //  position: 2,
 //  newName: 'moby dick'
 // }

// 4.
app.put('/books', function(req, res, next){
  var newPosition = req.body.position;
  books[newPosition] = req.body.newName;
  res.send(books);
});


// 5.
app.delete('/books/:id', function(req, res, next){
  books.splice(req.params.id, 1);
  res.send(books);
})
  //reqs.params = {id: 1 }

var port = 3000;
app.listen(port, function(){
  console.log('listening on port ' + port);
});
