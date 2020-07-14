var http = require('http');

var server = http.createServer((req, res) => {
    console.log('request @' + req)
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('hey debadatta you have created your first server!!');
})

server.listen(3000, '127.0.0.1');
console.log('Yo, you are listenting on port 3000 at localhost');