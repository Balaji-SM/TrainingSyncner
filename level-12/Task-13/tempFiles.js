const fs = require('fs');
const path = require('path');


function createTempFiles() {
 
  fs.mkdtemp(path.join(__dirname, 'tempDir-'), (err, tempDir) => {
    if (err) {
      console.error(`Error creating temporary directory: ${err.message}`);
      return;
    }

    console.log(`Temporary directory created: ${tempDir}`);

   
    const filenames = ['file1.txt', 'file2.txt', 'file3.txt'];
    
    filenames.forEach((filename, index) => {
      const filePath = path.join(tempDir, filename);
      const fileData = `This is the content of ${filename}. It is file number ${index + 1}.`;


      fs.writeFile(filePath, fileData, (err) => {
        if (err) {
          console.error(`Error writing to file ${filePath}: ${err.message}`);
          return;
        }

        console.log(`File created: ${filePath}`);
      });
    });
  });
}


createTempFiles();
