const fs = require('fs');

fs.rename('myfile.txt', 'mynewfile.txt', function (err) {
  if (err) throw err;
  console.log('File renamed!');
});