console.log('-------------- Type of -----------------')
let itmOne = 10;
let itmTwo = '20';
let itmThree = true;

console.log(typeof(itmOne))
console.log(typeof(itmTwo))
console.log(typeof(itmThree))
// Once a number is added to a sting it becomes a string in JS AND ALSO 10 + '20' would be '1020'
console.log((itmOne+itmTwo))
console.log(typeof(itmOne+itmTwo))

console.log('-------------- Number Methods -----------------')
let myStringIng = '10';
let myStringFloat = '1.275';
console.log(parseInt(myStringIng)+parseFloat(myStringFloat))

console.log('-------------- Null and Undefined -----------------')
let admin = null
console.log(admin)
let passwordRequired
console.log(passwordRequired)

console.log('-------------- Infinity, -Infinity and NaN -----------------')
// javascript code
let notANumber = isNaN('acs')
console.log(notANumber)
let isANumber = isNaN(345)
console.log(isANumber)
let finiteNumber = isFinite(34545)
console.log(finiteNumber)
let notAFiniteNumber = isFinite(1.9e308)
console.log(notAFiniteNumber)

console.log('-------------- Type Coercion -----------------')
let num100  = 100
let str100 = "100"
console.log(num100 == str100)
console.log(num100 === str100)
console.log(num100 !== str100)
console.log(num100 + str100)
console.log(num100 + Number(str100))