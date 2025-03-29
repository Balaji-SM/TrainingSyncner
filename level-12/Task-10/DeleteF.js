
const fs = require('fs');

const filePath = './testFile.txt';


function deleteFile() {

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      
      console.log(`File not found: ${filePath}`);
      return;
    }


    fs.unlink(filePath, (err) => {
      if (err) {
     
        console.error(`Error deleting file: ${err.message}`);
        return;
      }

      
      console.log(`File deleted successfully: ${filePath}`);
    });
  });
}

deleteFile();
