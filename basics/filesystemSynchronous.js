var fs = require('fs');
// read file
// Sync=> means any code underneath,it will first read the entire file before moving ahead
// this is a blocking code
var readmyFile = fs.readFileSync('notes.txt', 'utf-8')
console.log(readmyFile)
fs.writeFileSync('writeFile.txt', readmyFile)