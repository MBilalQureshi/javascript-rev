// Opposite of spread operator
// Rest Parameter Syntax works in the opposite  direction from the spread operator. Where the spread operator can break an array into  its individual elements, 
// the rest parameter syntax combines individual elements into an array. It can  also be used to represent the “rest” of the values 
console.log('-------------- Regular arrow function call  -----------------')
const sumAll = (a,b,c) => a + b + c
let sum = sumAll(1,2,3);
console.log('sum',sum);

console.log('-------------- Notice exra aurguments are ignored  -----------------')
let sum2 = sumAll(1,2,3,4,5,6);
console.log('sum2 is wrong 4,5,6 is ignored so answer is still',sum2)



console.log('-------------- arrow function using Rest Parameter Syntax, Note ...rest is just and example we can name it anything -----------------')
const sumRest = (a,b,c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest){
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1,2,3,4,5,6);
console.log('sum3',sum3)