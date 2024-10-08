const userName = 'adolf hitler';
let age: number;

age = 666;
console.log(userName,age);

// function add(a: number,b: number){
//     var result;
//     result = a+b;
//     return result;
// }

// const add = (n1: number,n2: number = 10) => {
//     return n1 + n2;
// };

const printRes: (res: string) => void = res => console.log(res);

const button = document.querySelector("button");

if(button){
    button.addEventListener('click',event => console.log(event));
}

// console.log(add(12,5));
// console.log(add(12));

const hobbies = ['sports','cooking'];
const activeHobies = ['hiking'];

activeHobies.push(...hobbies);
console.log(activeHobies);

const add = (...numbers: [number,number,number]) => {
    return numbers.reduce((curentRes,curentVal) =>{
        return curentRes + curentVal;
    },0)
}

const numbers = add(12,11,2);
console.log(numbers);

const [hobby1,hobby2] = [...activeHobies];