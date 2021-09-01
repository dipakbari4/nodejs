/**
 * This program demonstrates the url endpoint pass in NodeJS
 */
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(req.url);
  res.end();
}).listen(3000);