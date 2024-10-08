function add(num1: number, num2: number): number{
    return num1 + num2;
}

function printResult(num: number): void{
    console.log('result ' + num);
}

printResult(add(10,100));



let combineValues: (a: number,b: number) => number;
combineValues = add;
console.log(combineValues(8,8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(12,22,(result) => {console.log(result)});
