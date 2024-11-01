const path = require('path');

const filePath = '/user/local/bin/file.txt';
console.log('Directory:', path.dirname(filePath));
console.log('Base Name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));
console.log('Normalized Path:', path.normalize('/user/local/../bin/file.txt'));
console.log('Joined Path:', path.join('/user', 'local', 'bin/file.txt'));
