const fs = require('fs');


const oldFileName = 'C:\\Users\\Acer\\Desktop\\traning\\phase-1\\level-12\\Task-6\\oldest.txt';
const newFileName = 'C:\\Users\\Acer\\Desktop\\traning\\phase-1\\level-12\\Task-6\\newname.txt';

fs.rename(oldFileName, newFileName, (err) => {
  if (err) {
    console.error('Error renaming the file:', err);
    return;
  }
  console.log(`File ${oldFileName} successfully renamed to ${newFileName}`);
});
