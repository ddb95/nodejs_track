var fs = require('fs');

// fs.unlink('writeTheContents.txt', (data, err) => {
//     console.log('deleted')
// })

// Make directory - > Read file - > write the contents of the file in the specific directory
fs.mkdir('makeADirectory', () => {
    fs.readFile('notes.txt', 'utf-8', (err, data) => {
        writeIntheFile(data);
    })
})
var writeIntheFile = (data) => {
    fs.writeFile('./makeADirectory/stuffwriteTheContents.txt', data, (err, data) => {
        console.log('write complete');
    });
}