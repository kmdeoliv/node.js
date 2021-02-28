var http = require('http');
var url = require('url'); //require url module

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query; 
  var txt = q.year + " " + q.month;//split the query 
  res.end(txt);
}).listen(8080);