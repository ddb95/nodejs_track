var calculateArrayLength = (arr) => {
    return 'Length of the array is ' + arr.length;
}

var arrayValues = (arr) => {
    return 'First Value of the array is ' + arr[0];
}

// console.log(calculateArrayLength(['deboneil', 'debadatta', 'reenakshi']));
console.log(arrayValues(['deboneil', 'debadatta', 'reenakshi']));

/*
    What part of the module we want to make available to other files
*/

module.exports = calculateArrayLength, arrayValues;