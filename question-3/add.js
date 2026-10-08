// Question 3 (part 2): Create Log files
const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

// Create the Logs directory if it does not exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Change the current process to the Logs directory
process.chdir(logsDir);

// Create 10 log files, write some text into each and output the file name
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file number ${i}\n`);
    console.log(fileName);
}
