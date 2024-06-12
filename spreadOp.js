//Gives us more powerful ways of manipulating JavaScript arrays
console.log('-------------- Venilla JS to tell issue  -----------------')
// No spread operater just Venilla JS
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log('array 2 ->',arr2);
console.log('Array 1 is also updated when array two was update = arr1->',arr1);
// ISSUE: if you log the first  array to the console, you'll see that when we  
// pushed the fourth element into the 2nd array,  it was also pushed into the first array.
// This is because the second array is  not actually a copy of the first,  
// it's a new variable which points to the same  object as the other variable. Because of this,  
// anything we do to the second array will  be done to the first and vice versa. 
// Vanilla JavaScript has ways to resolve  this issue, but since we’re learning ES6,

console.log('-------------- Spread operator coping array to solve above issue -----------------')
//SOLUTION: Coping an array using spread operator
let arr3 = [4,5,6];
let arr4 = [...arr3];

arr4.push(7);
console.log('Now arr3 does not contain arr4 anymore using spread operator = arr3 =>',arr3);
console.log('arr4',arr4);

console.log('-------------- Spread operator coping object -----------------')
let obj1 = {a:1,b:2,c:3};
let obj2 = {...obj1,d:4};
console.log('obj1',obj1);
console.log('obj2',obj2);
//If we want to chnage just one value from orignal object we do the following
let obj3 = {...obj1,b:9}
console.log('Orginal obj1 is untouched but new obj3 had obj1 values plus updated b from 2 to 9 ->',obj3)

console.log('-------------- Copying only part of an array/object -----------------')
let arr5 = [...arr1,{ ...obj2},...arr3,'x','y','z'];
console.log(arr5)

console.log('-------------- Challenge -----------------')
// Create a variable named subjects using the keyword let
// Assign it a copy of the subjects array from the first object in the students array
// Create a variable named update using the keyword const
// Assign the variable update a single line arrow function  (should not have a return statement)
// The arrow function should take two parameters named: item and val the arrow function should copy the array passed in and add the value passed to it, then return the array.
// Create a variable named: updatedSubjects using the keyword let
// Variable updatedSubjects should be assigned the return value from calling the update function passing in the subjects array and the string "Electronics"
// Variable updatedSubjects should have the correct value
// The original version of the subjects array in the students array should not have been modified
// log out the variable updatedSubjects to see its value
// log out students[0] to see that it has not been changed, if you have done everything correctly
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

let subjects = [...students[0].subjects]
const updated = (item, val) => [...item,val];

let updatedSubjects = updated(subjects,"Electronics")
console.log('Updated Subjects are', updatedSubjects);
console.log(students[0])