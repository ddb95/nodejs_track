var fs = require('fs');

// While reading, the extra code behind it will fire
// Faster because it happens in bg, multiple request it will not delay
fs.readFile('notes.txt', 'utf-8', (err, data) => {
    writeIntheFile(data);

});

var writeIntheFile = (data) => {
    fs.writeFile('writeTheContents.txt', data, () => {
        console.log('write complete');
    });
}