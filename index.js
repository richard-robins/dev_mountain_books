var express = require('express');
var bodyParser = require('bodyParser');

var app = express();


// always parse http body as json
// assings result to req.body
app.use(bodyParser.json());

var port = 3000;
app.listen(port, function(){
  console.log('listening on port ' + port);

});
