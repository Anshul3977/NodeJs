const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile('output.txt', data, (err) => {
    if (err) throw err;
    console.log('Content copied to output.txt');
  });
});
