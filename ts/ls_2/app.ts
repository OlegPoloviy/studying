let userInput: unknown;
let userName: string;

userInput = 5;
userInput = false;
if(typeof userInput === 'string'){
    userName = userInput;
}

console.log(userInput);

function generateError(message: string, code: number): never{
    throw {
        message: message,
        errorCode: code
    }
}

generateError("Err",600);