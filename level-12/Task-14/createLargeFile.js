const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'largeFile.txt');


const writableStream = fs.createWriteStream(filePath);


const sizeInMB = 1;
const sizeInBytes = sizeInMB * 1024 * 1024;
let bytesWritten = 0;

while (bytesWritten < sizeInBytes) {
  writableStream.write('A'.repeat(1024)); 
  bytesWritten += 1024;
}

writableStream.end();

writableStream.on('finish', () => {
  console.log(`Test file created: ${filePath}`);
});
