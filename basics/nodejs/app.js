var express = require('express');

// Access all the functionality of the express
// app helps to access a variety of methods to help respond the requests(http methods) 
var app = express();

app.get('/', (req, res) => {
    res.send('this is the homepage');
});

app.get('/contact', (req, res) => {
    res.send('this is the contact');
});

// listen to port?
app.listen(3000);

