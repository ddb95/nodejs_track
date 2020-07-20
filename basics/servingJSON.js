var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    console.log('Server Started listening ///');
    var myObj = {
        name: "Pankaj",
        class: "10",
        subject: "History"
    };
    // Expects string or buffer
    // res.end(myObj)
    // For JSON objects
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Server Started');