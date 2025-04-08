const fs = require('fs');
const path = require('path');
const { organizeFilesAsync } = require('./organizer-async');

const dirPath = './files';

fs.watch(dirPath, { persistent: true }, (eventType, filename) => {
  if (filename) {
    console.log(`Change detected: ${filename}`);
    setTimeout(() => {
      organizeFilesAsync(dirPath);
    }, 1000); // Delay to allow file to fully copy
  }
});

console.log('Watching for file changes...');
