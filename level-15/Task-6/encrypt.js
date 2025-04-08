const crypto = require('crypto');
const fs = require('fs');

function encryptFile(filePath, password) {
    const algorithm = 'aes-256-cbc';
    const key = crypto.scryptSync(password, 'salt', 32);
    const iv = crypto.randomBytes(16);

    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(`${filePath}.enc`);
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    writeStream.write(iv);

    readStream.pipe(cipher).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File Encrypted Successfully!');
    });
}

module.exports = { encryptFile };
