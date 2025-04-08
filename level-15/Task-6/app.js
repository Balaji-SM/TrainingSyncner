const readline = require('readline');
const { encryptFile } = require('./encrypt');
const { decryptFile } = require('./decrypt');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Choose option (encrypt/decrypt): ', (option) => {
    if (option === 'encrypt') {
        rl.question('Enter file path: ', (filePath) => {
            rl.question('Enter password: ', (password) => {
                encryptFile(filePath, password);
                rl.close();
            });
        });
    } else if (option === 'decrypt') {
        rl.question('Enter file path: ', (filePath) => {
            rl.question('Enter password: ', (password) => {
                decryptFile(filePath, password);
                rl.close();
            });
        });
    } else {
        console.log('Invalid Option');
        rl.close();
    }
});
