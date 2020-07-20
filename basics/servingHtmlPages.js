var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    console.log('Server Started');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var readFileStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    readFileStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
