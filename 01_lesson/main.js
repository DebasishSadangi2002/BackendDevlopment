const os = require('os');

// Get the platform (operating system)
console.log('Platform:', os.platform());  // Example: 'linux', 'darwin', 'win32'

// Get the architecture of the CPU
console.log('Architecture:', os.arch());  // Example: 'x64', 'arm'

// Get the number of CPU cores
console.log('CPU Cores:', os.cpus().length);

// Get free memory
console.log('Free Memory:', os.freemem() / (1024 * 1024), 'MB');

// Get total memory
console.log('Total Memory:', os.totalmem() / (1024 * 1024), 'MB');

// Get home directory
console.log('Home Directory:', os.homedir());

// Get network interfaces
console.log('Network Interfaces:', os.networkInterfaces());

// Get system uptime in seconds
console.log('System Uptime (seconds):', (os.uptime()/3600));
