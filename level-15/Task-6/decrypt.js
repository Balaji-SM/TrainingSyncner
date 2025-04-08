const crypto = require('crypto');
const fs = require('fs');

function decryptFile(filePath, password) {
    const algorithm = 'aes-256-cbc';
    const readStream = fs.createReadStream(filePath);

    const outputPath = filePath.replace('.enc', '.dec');
    const writeStream = fs.createWriteStream(outputPath);

    let iv;

    readStream.once('readable', () => {
        iv = readStream.read(16);
        const key = crypto.scryptSync(password, 'salt', 32);
        const decipher = crypto.createDecipheriv(algorithm, key, iv);

        readStream.pipe(decipher).pipe(writeStream);
    });

    writeStream.on('finish', () => {
        console.log('File Decrypted Successfully!');
    });
}

module.exports = { decryptFile };
