/**
 * This program made to demonstrate about reading a file
 * and passing into response body.
 */

const fs = require('fs');
const http = require('http');

http.createServer(function (req, res) {
  fs.readFile('sample.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  })
}).listen(3000);

console.log('Server running at http://localhost:3000');