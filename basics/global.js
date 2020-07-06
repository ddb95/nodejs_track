console.log('hey');
var timeVal = 0;
setTimeout(() => {
    console.log('3secs')
}, 3000);

// Infinite 
// setInterval(() => {
//     timeVal += 2
//     console.log(timeVal + ' secs')
// }, 2000);

// Close after a condition

var timer = setInterval(() => {
    timeVal += 2
    console.log(timeVal + ' secs has passed');
    if (timeVal > 6) {
        clearInterval(timer);
    }
}, 2000);



// Current directory
console.log(__dirname);

// Current filename
console.log(__filename);