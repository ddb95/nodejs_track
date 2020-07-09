// Send parameter
var callingFun = (funcName) => {
    funcName();
}
var sayBye = () => {
    console.log('Bye')
}

// Invoke
callingFun(sayBye);