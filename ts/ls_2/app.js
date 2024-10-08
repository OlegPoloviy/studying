var userInput;
var userName;
userInput = 5;
userInput = false;
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(userInput);
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError("Err", 600);
