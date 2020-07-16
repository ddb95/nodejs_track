var http = require('http');
var fs = require('fs');

// Create a readable stream 
var myStream = fs.createReadStream(__dirname + '/readableDemo.txt', 'utf-8');

// fs.createReadStream inherits from event emitter and has a event(), which listens when we receive a chunk of data
myStream.on('data', (chunkOfData) => {
    console.log('new Chunk Received');
    console.log(chunkOfData);
}) 