
const fs = require('fs');

const filePath = './testFile.txt';

fs.watch(filePath, (eventType, filename) => {
  if (filename) {
    if (eventType === 'rename') {
      
      console.log(`The file ${filename} was renamed or deleted.`);
    } else if (eventType === 'change') {
      
      console.log(`The file ${filename} was modified.`);
    }
  } else {
    console.log('File name not provided.');
  }
});


console.log(`Watching for changes on: ${filePath}`);
