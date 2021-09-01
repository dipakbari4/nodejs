/**
 * This program will write a file with some content in it.
 */
const fs = require('fs');

fs.writeFile('myfile.txt', 'This is text from fs_write.js file program', function (err) {
  if (err) throw err;
  console.log('file saved');
})