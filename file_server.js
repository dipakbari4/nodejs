/**
 * This program will load two different html file
 * to each request.
 */

const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
  const query = url.parse(req.url, true);
  const filepath = "." + query.pathname;
  console.log(filepath);
  fs.readFile(filepath, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("<h1>Page not found</h1>");
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  })
}).listen(3000);

console.log('Server started at http://localhost:3000');