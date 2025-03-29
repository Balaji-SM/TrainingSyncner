// Import the 'fs' (File System) module to interact with the file system.
const fs = require('fs');
const path = require('path');

// Define the source file path (this file should already exist).
const sourceFile = path.join(__dirname, 'source.txt');

// Define the destination file path (where the file will be copied to).
const destinationFile = path.join(__dirname, 'destination.txt');

// Function to check if a file exists at a given path.
const fileExists = (filePath) => {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    console.error("Error checking file existence:", err);
    return false;
  }
};

// Check if the destination file already exists.
if (fileExists(destinationFile)) {
  console.log("Error: The destination file already exists.");
} else {
  // Copy the source file to the destination.
  fs.copyFile(sourceFile, destinationFile, (err) => {
    if (err) {
      // If an error occurs during the copy operation, log it.
      console.error("Error copying the file:", err);
    } else {
      // If the copy operation is successful, confirm it.
      console.log(`File copied successfully from ${sourceFile} to ${destinationFile}`);
    }
  });
}
