// Question 3 (part 1): Remove Log files
const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logsDir)) {
    // Remove every file in the Logs directory, printing each name
    const files = fs.readdirSync(logsDir);

    files.forEach((file) => {
        console.log(`delete files...${file}`);
        fs.unlinkSync(path.join(logsDir, file));
    });

    // Remove the (now empty) Logs directory
    fs.rmdirSync(logsDir);
} else {
    console.log('Logs directory does not exist');
}
