const fs = require('fs');
const path = require('path');

const dirs = [
  './testDir',
  './testDir/subdir1',
  './testDir/subdir2',
  './testDir/subdir1/subsubdir1',
];

const files = [
  './testDir/testFile1.txt',
  './testDir/subdir1/testFile2.txt',
  './testDir/subdir2/testFile3.txt',
  './testDir/subdir1/subsubdir1/testFile4.txt',
];

dirs.forEach((dir) => {
  fs.mkdirSync(dir, { recursive: true });
});
files.forEach((file) => {
  fs.writeFileSync(file, 'This is a test file');
});

console.log('Test directory structure created successfully!');
