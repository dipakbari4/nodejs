const http = require('http');
const dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('date and time: ' + dt.myDateTime());
}).listen(3000);