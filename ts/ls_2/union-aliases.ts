type Combinable = number | string;
type Descriptor = 'as-number' | 'as-string';

function combine(input1: Combinable,input2: Combinable,resutType: Descriptor){
    let result;

    if(typeof input1 == 'number' && typeof input2 == 'number' || resutType === 'as-number' ){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }

    // if(resutType === 'as-number'){
    //     return Number(result);
    // }else{
    //     return result.toString();
    // }
    return result;
}

const combined = combine(10,20,"as-string");
const names = combine('asas','idiot',"as-string");
const ages = combine('12','10','as-number')
console.log(combined);
console.log(names);
console.log(ages);

type User = {
    name:string,
    age:number
}

const u1: User = {
    name: "oleg",
    age: 50
}

console.log(u1);