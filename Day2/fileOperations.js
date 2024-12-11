// Create a new JavaScript file named fileOperations.js and perform the following:
// Create a file named example.txt and write "This is my first file using Node.js" into it.
// Append the text " Adding more content to the file." to the same file.
// Read and display the contents of the file in the console.
// Hint: Use fs.writeFileSync, fs.appendFileSync, fs.readFileSync, and fs.unlinkSync.
// Use the path module to get the file name and directory name of the example.txt file.
// Delete the file.

const fs = require('fs');
const path = require('path');

fs.writeFileSync("example.txt", 'This is my first file using Node.js')

fs.appendFileSync("example.txt", " Adding more content to the file.")
fs.appendFileSync("example.txt", " Adding more content to the file.")

console.log(fs.readFileSync("example.txt", 'utf-8')) 

const filename =  path.basename('example.txt');
console.log(filename)

const dirname =  path.dirname(path.resolve('example.txt'));
console.log(dirname)

fs.unlinkSync('example.txt');
console.log('File deleted successfully.');


// 1. What are Node.js Core Modules? Name Five of Them.
// Node.js core modules are pre-built modules for common functionalities. Five examples:

// fs: File operations.
// path: File and directory path utilities.
// os: Operating system information.
// http: HTTP server and request handling.
// crypto: Cryptography utilities.

// 2. Difference Between require and import
// require is CommonJS-specific and works at runtime.
// import is ES6-specific and works at compile-time.

const fileExists = (filePath) => {
    try {
      fs.accessSync(filePath, fs.constants.F_OK);
      return true; // File exists
    } catch (err) {
      return false; // File does not exist
    }
  };
  
//   3. Write a Function to Check if a File Exists Before Performing File Operations
// javascript
// Copy code

  // Usage:
  const filePath = 'example.txt';
  if (fileExists(filePath)) {
    console.log(`${filePath} exists.`);
  } else {
    console.log(`${filePath} does not exist.`);
  }
  