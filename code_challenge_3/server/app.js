/** ---- DO NOT MODIFY THIS FILE ---- **/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var treats = require('./routes/treats');

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/treats', treats);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public', '/views', 'index.html'));
});

app.listen(5000, function (req, res) {
  console.log('Now listening on port 5000.');
  console.log('Go to localhost:5000 to see site.');
  console.log('Ctrl+C shuts down server.');
});
