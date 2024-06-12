console.log('-------------- Vanilla JS  -----------------')
function addTwoNumbers(a,b){
    return a + b; 
 }
let sum = addTwoNumbers(3,5)
console.log(sum)

console.log('-------------- Arrow function with paramerts  -----------------')
//Usually, ES6 arrow functions are defined as constants.

// Use curly braces only when logic is complex
const addTwoNumbers1 = (a,b) => {
     return a + b 
}
sum = addTwoNumbers(3,5)
console.log(sum)
console.log('-------------- Single line arrow function without braces and return -----------------')
const addTwoNumbers2 = (a,b) => a + b; //also valid -> const addTwoNumbers2 = (a,b) => (a + b);
sum = addTwoNumbers(3,1)
console.log(sum)

console.log('-------------- Single line arrow function without braces and () when single param -----------------')
const saySomething = message => console.log(message);
sum = saySomething("Hello")

console.log('-------------- No param at all -----------------')
const saySomething1 = () => console.log('Hello 1');
saySomething1();

console.log('-------------- Multiline must be wrapped in () -----------------')
const multiLine = () => (
    `<p>
        This is multi line string
    </p>`
)
console.log(multiLine());

console.log('-------------- Challenge -----------------')
// Declare a variable named averagePoints using the keyword const
// Assign it an arrow function, which should take two parameters named: arr and subject
// The function should have a return statement
// Declare a variable named: averageMarks using the keyword let
// Assign it the return value from calling the function averagePoints, and passing it the students array and one of the following strings: 'maths', 'english', 'cad', 'science', 'art'
// log out the variable averageMarks to see its value
// The function should return the correct value no matter which subject is used.
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths', 'english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let avgMarks = 0
    let divBy = 0
    for(index in arr){
        if(subject in arr[index].results){
            avgMarks += arr[index].results[subject]
            divBy +=1
        }
    }
    return avgMarks/divBy
}
let averageMarks = averagePoints(students, 'maths')
console.log(averageMarks)