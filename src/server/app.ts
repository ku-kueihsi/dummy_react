/// <reference path='typings/tsd.d.ts' />
import express = require('express');

var STATIC_PATH = '/static';
var PORT = 1949;

var app = express();

app.get('/', function (req, res) {
  res.send(
    'Example app at: ' + 'localhost:' + PORT + STATIC_PATH + '/index.html');
});

app.use(STATIC_PATH, express.static(__dirname + '/../public'));
// app.use(express.static('public'));
var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log('Example app listening at http://%s:%s', host, port);
  console.log(
    'Example app at: ' + 'localhost:' + port + STATIC_PATH + '/index.html');
});