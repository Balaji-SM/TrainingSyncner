const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'downloads');

fs.watch(targetDir, (eventType, filename) => {
    if (filename && eventType === 'rename') {
        console.log(`Change detected: ${filename}`);
        require('./organizer');  // Run organizer.js again
    }
});

console.log('Watching for file changes...');
