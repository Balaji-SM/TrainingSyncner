const fs = require('fs'); 

const fileName = 'student.txt';

fs.stat(fileName, (err, stats) => {
    if (err) {
        console.error('Error retrieving file stats:', err);
        return;
    }

    console.log(`File Size: ${stats.size} bytes`);

   
    const creationDate = new Date(stats.birthtime);
    const lastModifiedDate = new Date(stats.mtime);

    console.log(`Creation Time: ${creationDate.toLocaleString()}`);
    console.log(`Last Modified Time: ${lastModifiedDate.toLocaleString()}`);
});
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file content:', err);
        return;
    }

    // Display the file content
    console.log('\nFile Content:');
    console.log(data);
});
