const fs = require('fs');
const path = require('path');

function copyLargeFile() {

  const sourceFilePath = path.join(__dirname, 'largeFile.txt');
  const destinationFilePath = path.join(__dirname, 'copyOfLargeFile.txt');

  const readStream = fs.createReadStream(sourceFilePath);
  const writeStream = fs.createWriteStream(destinationFilePath);

  let totalBytesCopied = 0;

  fs.stat(sourceFilePath, (err, stats) => {
    if (err) {
      console.error(`Error getting file stats: ${err.message}`);
      return;
    }

    const totalFileSize = stats.size;

    console.log(`Copying file: ${sourceFilePath}`);
    console.log(`Total file size: ${totalFileSize} bytes`);

    
    readStream.pipe(writeStream);

    
    readStream.on('data', (chunk) => {
      totalBytesCopied += chunk.length;
      const progress = (totalBytesCopied / totalFileSize) * 100;
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(`Progress: ${Math.round(progress)}%`);
    });

    readStream.on('error', (err) => {
      console.error(`Error reading the file: ${err.message}`);
    });

    writeStream.on('error', (err) => {
      console.error(`Error writing the file: ${err.message}`);
    });

    writeStream.on('finish', () => {
      console.log('\nFile copy completed!');
    });
  });
}

copyLargeFile();
