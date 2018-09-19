var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
// app.use(express.static(__dirname + '/public'));
app.use(app.router);
app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(__dirname + '/app/index.html');
});
app.listen(port);