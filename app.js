const fs = require('fs').promises;

const text = 'This is a test - should be stored in a file';

fs.writeFile('node-message.txt', text)
.then(() => {
    console.log('wrote to node-file!');
})