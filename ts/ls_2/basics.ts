function add(num1: number,num2: number,result: boolean,phrase: string){
    // if(typeof num1 !== 'number' || typeof num2 !== 'number' ){
    //     throw new Error('this is not a number!');
    // }
    const resultAddition = num1 + num2
    if(result === true){
        console.log(phrase + resultAddition);
    }else{
        return num1 + num2;
    }
}

let number1:number;
number1 = 10;
const number2 = 5.12;
const printResult = true;
const phrase = 'the res is :'

add(number1,number2,printResult,phrase);