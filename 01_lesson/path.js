const path = require('path');

// Join multiple segments into a path
const fullPath = path.join(__dirname, 'folder', 'file.txt');
console.log('Full Path:', fullPath);  // Example: '/Users/user/project/folder/file.txt'

// Get the directory name from a full path
console.log('Directory Name:', path.dirname(fullPath));  // Example: '/Users/user/project/folder'

// Get the base name (file name) from a full path
console.log('Base Name:', path.basename(fullPath));  // Example: 'file.txt'

// Get the file extension
console.log('File Extension:', path.extname(fullPath));  // Example: '.txt'

// Normalize a path
const weirdPath = '/Users//user/../project/folder/./file.txt';
console.log('Normalized Path:', path.normalize(weirdPath));  // Example: '/Users/project/folder/file.txt'

// Resolve an absolute path
const relativePath = './folder/file.txt';
console.log('Resolved Path:', path.resolve(relativePath));  // Example: '/Users/user/project/folder/file.txt'
