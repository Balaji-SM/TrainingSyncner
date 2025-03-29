const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) {
 
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {

    const stats = fs.statSync(file);

    if (stats.isDirectory()) {
          console.log(`${file} [DIR]`);
    } else {
    
      console.log(file);
    }
  });
});
