const fs = require('fs');

fs.appendFile('myfile.txt', ' This is a sample appended text', function (error) {
  if (error) throw error;
  console.log('text appended');
});