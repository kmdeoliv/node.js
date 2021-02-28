/*The code tells the computer to write "Hello World!" if anyone  tries to access your computer on port 8080*/

//require http module
var http = require('http');

//create a server object
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(8080);
