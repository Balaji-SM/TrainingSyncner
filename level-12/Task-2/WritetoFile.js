const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'output.txt');
const data = 'Hello, Node.js! iam Balaji FSD developer';

fs.writeFile(filePath, data, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err.message);
        return;
    }
    console.log('File has been written successfully!');
});
