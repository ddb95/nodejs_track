var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readableDemo.txt');
var writeStream = fs.createWriteStream(__dirname + '/pipeWriteStream.txt');

readStream.pipe(writeStream);