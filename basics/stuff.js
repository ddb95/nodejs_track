var calculateArrayLength = (arr) => {
    return 'Length of the array is ' + arr.length;
}

var arrayValues = (arr) => {
    return 'First Value of the array is ' + arr[0];
}

var addTwoStr = (str1, str2) => {
    return `The addition of two strings ${str1} ${str2}`
}

var pieVal = 3.14

// console.log(calculateArrayLength(['deboneil', 'debadatta', 'reenakshi']));
console.log(arrayValues(['deboneil', 'debadatta', 'reenakshi']));

/*
    What part of the module we want to make available to other files
*/

// First Way
// module.exports.calculateArrayLength = calculateArrayLength;
// module.exports.arrayValues = arrayValues;
// module.exports.addTwoStr = addTwoStr;
// module.exports.pieVal = pieVal;

// Another way

module.exports = {
    calculateArrayLength = calculateArrayLength,
    arrayValues = arrayValues,
    addTwoStr = addTwoStr,
    pieVal = pieVal,
};