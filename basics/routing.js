var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    console.log('Requesting: ' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/api/contactDetails') {
        var myObj = {
            name: "Pankaj",
            class: "10",
            subject: "History"
        };
        res.writeHead(200, { 'Content-type': 'text/json' });
        res.end(JSON.stringify(myObj))
    } else {
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname + '/error404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Server Started listening on port 3000');