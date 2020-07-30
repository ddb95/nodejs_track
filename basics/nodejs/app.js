var express = require('express');

// Access all the functionality of the express
// app helps to access a variety of methods to help respond the requests(http methods) 
var app = express();
app.set('view engine', 'ejs');
// app.get('/', (req, res) => {
//     res.send('this is the homepage');
// });

app.get('/contact', (req, res) => {
    res.send('this is the contact');
});

// Route Params
// app.get('/profile/:id', (req, res) => {
//     res.send('The requested Id: ' + req.params['id']);
// });

// app.get('/profile/:name', (req, res) => {
//     res.send('The requested name: ' + req.params['name']);
// });

// Template Engines
// Sending a html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html');
});


// Render a ejs file
app.get('/profile/:name', (req, res) => {
    res.render('profile', { person: req.params.name });
});

app.get('/dummyDataShowCase/:name', (req, res) => {
    var data = {
        age: 34,
        job: 'SDE LIFE',
        hobby: 'car driving'
    }
    res.render('dummyDataProfile', { person: req.params.name, data, data });
});


// listen to port?
app.listen(3000);

