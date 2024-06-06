console.log('-------------- Storing Values -----------------')
let num = 10
console.log(num)
num +=10
console.log(num)
let numB = 10
console.log(numB)
numB *= 10
console.log(numB)

console.log('-------------- PEMDAS - Basic Math With Arithmetic Operators -----------------')
let x = 2;
let y = 3;
let z = 4;

console.log(x + y * z);  // 2 + 12 = 14
console.log((x+y) * z);  // 5 * 4 = 20

console.log('-------------- Incrementing & Decrementing -----------------')
let num1 = 10
console.log(num1)
num1++
console.log(num1)
num1--
console.log(num1)

console.log('-------------- Comparison Operators -----------------')
let varOne = (1 === 2)
console.log(varOne)
let varTwo  = (1 !== 2)
console.log(varTwo)
let varThree = (1 > 2)
console.log(varThree )
let varFour  = (1 <= 2)
console.log(varThree )

console.log('-------------- Logical Operators -----------------')
let passport = true;
let ticket = true;
let weapons = false;
let a = 10;
let b = 5;

let either = a > 10 || b <= 5
let getOnFlight = passport && ticket && !weapons;
console.log(either)
console.log(getOnFlight)

console.log('-------------- Equality vs. Strict Equality -----------------')
let varA = '10';
let varB = 10;

let varC = "";
let varD = 0;
let varE = 1;
console.log(varA == varB)
console.log(varA === varB)
console.log(varC == varD)// "" == 0 so true
console.log(varC === varD) //"" === 0 so false
console.log(varC == varE)