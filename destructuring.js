console.log('-------------- This does not use destructuring  -----------------')
let ages = [12,23,45]
let john = ages[0];
let mary = ages[1];
let joe = ages[2];
console.log('No destructring',john, mary, joe)

console.log('-------------- Destructuring arrays in ES6  -----------------')
let [john1, mary1, joe1] = ages; //Destructuring
console.log('destructring array',john, mary, joe)


console.log('-------------- Destructuring objects in ES6  -----------------')
let jobs = {
    mike: 'dev',
    alicai: 'painter',
    bob: 'carpenter'
}
let {mike, alicai, bob} = jobs; //Destructuring
console.log('Destructuring objects',mike, alicai, bob)


console.log('-------------- Destructuring subsets in ES6  -----------------')
console.log('Arrays first')
let languages = ['eng','urdu','german','french']
let [johnNative, AliNative] = languages; // LAST TWO ARE SKIPPED
console.log('Skipped last two=>',johnNative, AliNative)

// WHAT IF TO SKIP FIRST TWO USE , ,
let [, , maryNative, joeNative] = languages
console.log('Skipped first two=>',maryNative, joeNative)


console.log('Now objects')
let languages2 = {
    fiestLanguage: 'eng',
    secondLanguage: 'urdu',
    thirdLanguage: 'farsi',
    forthLangueage: 'German'
}
let {fiestLanguage, thirdLanguage} = languages2
console.log(fiestLanguage, thirdLanguage)

console.log('-------------- using rest parameter syntax  -----------------')
console.log('Arrays first')
let fruits = ['apple','banana', 'kiwi', 'peach','berries','watermelon']
let [favorite, secondFav, thirdFav, ...others] = fruits
console.log(favorite)
console.log(secondFav)
console.log(thirdFav)
console.log(others) // An array will be returned


console.log('Now objects')
let languages3 = {
    fiestLanguage1: 'eng',
    secondLanguage1: 'urdu',
    thirdLanguage1: 'farsi',
    forthLangueage1: 'German'
}
let {fiestLanguage1, secondLanguage1, ...restLanguages} = languages3
console.log(fiestLanguage1)
console.log(secondLanguage1)
console.log(restLanguages) // objects will be returned


console.log('-------------- Challenege  -----------------')
// Declare a variable named: makeList using the keyword const
// The variable makeList should be assigned an arrow function
// The arrow function should take two parameters named: arr, student
// The arrow function should use a return statement
// The function should return an array of the subjects for the student whose name is passed into the function when called.
// Using destructuring on the return value from calling the function and passing in the students array,  and the string John, create 3 variables named: first, second, rest using the keyword let
// log out the values  first, second, and rest to view their values
let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];
const makeList = (arr, student) => {
    for(let item of arr){
        if(item.name === student){
            return item.subjects
        }
    }
}

let [first, second, ...restSubjects] = makeList(students, 'John')
console.log(first)
console.log(second)
console.log(restSubjects)
