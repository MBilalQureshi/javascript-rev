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



console.log('-------------- Challenge  -----------------')
// Create a variable named: moreMixedLetters using the keyword let
// Assign an array to the variable moreMixedLetters which should be a copy of the array mixedLetters and then the following values: 'h', 'k', 'g', 'j', 'i', 'l'  (note steps 1 and 2 should be done on a single line)
// log out moreMixedLetters
// Create a variable named: updateSortReverse using the keyword const
// Assign the variable updateSortReverse an arrow function 
// The arrow function should take two parameters one named: arr and another named: letters which should use the rest parameter syntax 
// This arrow function should combine all the argument passed in into a single array and sort them and reverse them and then return this array
// Create a variable named reverseSort using the keyword let
// Variable reverseSort should be assigned the return value from calling the updateSortReverse function passing in the moreMixedLetters array and the string values: 'n', 'm', 'o'
// log out the variable reverseSort to see its value
// log out the variable mixedLetters to see that it has not been changed if you have done everything correctly
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters,'h', 'k', 'g', 'j', 'i', 'l']
console.log('moreMixedLetters',moreMixedLetters)

const updateSortReverse = (arr,...letters) => [...arr,...letters].sort().reverse()
let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o')
console.log(reverseSort)
console.log(mixedLetters);