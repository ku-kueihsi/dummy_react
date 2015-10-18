// A very basic web server in node.js
// Stolen from: Node.js for Front-End Developers by Garann Means (p. 9-10)

var port = 1949;
var serverUrl = "127.0.0.1";

var http = require("http");
var path = require("path");
var fs = require("fs");

console.log("Starting web server at " + serverUrl + ":" + port);

http.createServer(function(req, res) {

  var now = new Date();

  //var filename = req.url || "index.html";
  //console.log(req.url);
  var filename = req.url;
  if (!filename || filename == '/') {
    filename = '/www/index.html';
  }
  var ext = path.extname(filename);
  var localPath = __dirname;
  var validExtensions = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".jsx": "text/babel",
    ".css": "text/css",
    ".txt": "text/plain",
    ".jpg": "image/jpeg",
    ".gif": "image/gif",
    ".png": "image/png"
  };
  var mimeType = validExtensions[ext];

  if (mimeType) {

    localPath += filename;
    fs.exists(localPath, function(exists) {
      if (exists) {
        console.log("Serving file: " + localPath);
        getFile(localPath, res, mimeType);
      } else {
        console.log("File not found: " + localPath);
        res.writeHead(404);
        res.end();
      }
    });

  } else {
    console.log("Invalid file extension detected: " + ext)
  }

}).listen(port, serverUrl);

function getFile(localPath, res, mimeType) {
  fs.readFile(localPath, function(err, contents) {
    if (!err) {
      res.setHeader("Content-Length", contents.length);
      res.setHeader("Content-Type", mimeType);
      res.statusCode = 200;
      res.end(contents);
    } else {
      res.writeHead(500);
      res.end();
    }
  });
}