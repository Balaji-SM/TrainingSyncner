
const fs = require('fs');
const path = require('path');


function readDirRecursive(directoryPath) {
      fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${directoryPath}: ${err.message}`);
      return;
    }


    files.forEach((file) => {

      const fullPath = path.join(directoryPath, file);

    
      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error(`Error retrieving stats for ${fullPath}: ${err.message}`);
          return;
        }

        if (stats.isDirectory()) {
        
          console.log(`Directory: ${fullPath}`);
          readDirRecursive(fullPath);
        } else if (stats.isFile()) {
       
          console.log(`File: ${fullPath}`);
        }
      });
    });
  });
}


const startDir = './testDir';


readDirRecursive(startDir);
