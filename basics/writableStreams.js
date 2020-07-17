var http = require('http');
var fs = require('fs');

var readableStream = fs.createReadStream(__dirname + '/readableDemo.txt', 'utf-8');
var writeableStream = fs.createWriteStream(__dirname + '/writableDemo.txt', 'utf-8');
readableStream.on('data', (chunks) => {
    console.log(chunks);
    writeableStream.write(chunks);
})