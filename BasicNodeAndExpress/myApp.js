var express = require('express');
var app = express();
var bodyParser = require('body-parser');
console.log("Hello World");
app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req, res, next){
console.log(req.method + ' ' + req.path + ' - ' + req.ip);
next();
});
app.get('/', function(req, res) {
  // res.send("Hello Express");
  res.sendFile(__dirname + '/views/index.html');
});

// app.use(express.static(__dirname + '/public'));

app.get('/json', function(req, res) {
  let response = {"message": "Hello json"};
  response = process.env.MESSAGE_STYLE === 'uppercase' ? {"message": "Hello json".toUpperCase()} : response
  res.send(response);
});
app.get('/now', function(req, res, next) {
req.time = new Date().toString();
next();
}, function(req, res){
  res.send({time: req.time});
});

app.get('/:word/echo', function(req, res) {
res.send({'echo': req.params.word});
});

app.get('/name', function(req, res) {
  res.send({"name": req.query.first + " " + req.query.last});
});

app.post('/name', function(req, res) {
  res.send({"name": req.body.first + " " + req.body.last});
});


































 module.exports = app;
