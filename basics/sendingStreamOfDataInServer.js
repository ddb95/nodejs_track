var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    console.log('server started listening');
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // Creating read stream
    var readStream = fs.createReadStream(__dirname + '/readableDemo.txt', 'utf-8');
    // Creating pipe to stream the data
    readStream.pipe(res)
})

server.listen(3000, '127.0.0.1');
console.log('Listening on 127.0.0.1@3000');