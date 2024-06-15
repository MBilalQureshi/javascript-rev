console.log('-------------- using for loop  -----------------')
let nums = [1,2,3,4,5];
let results = []
for(let num of nums){
    results.push(num*2)
}
console.log(results)

console.log('-------------- Behind the scene of map function: NOTE ITS JUTS TO TELL HOW MAP CALL BACK FUNCTION WORKS ONLY, we dont use it like this  -----------------')
const multByTwo = function(num){
    return num*2;
}
const mapResult1 = nums.map(multByTwo);
console.log(mapResult1)
console.log('-------------- More simplified map but WE STILL DONT USE IT LIKE THIS , WE USE IT WITH ARROW FUNCTTION MOSTLY -----------------')
const simplified = nums.map(function(num){return num*2});
console.log(simplified)

console.log('-------------- How we actually use map WITH ARROW FUNCTION -----------------')
const mapResult = nums.map(num => num*2);
console.log(mapResult)

console.log('-------------- map with objcets  -----------------')
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

const studentsWithIds = students.map(student => [student.name,student.id]);
console.log(studentsWithIds) //[ [ 'Mark', 1 ], [ 'Ariel', 2 ], [ 'Jason', 3 ] 
// TASK 1: Instead of returning the student names and ids as arrays, can you think of how you might return them as objects with  the id and name properties still intact?  

const studentData = students.map(student => ({id: student.id, name: student.name}));
console.log(studentData)
// [
//     { id: 1, name: 'Mark' },
//     { id: 2, name: 'Ariel' },
//     { id: 3, name: 'Jason' }
// ]

// TASK 2: What if you wanted to add an  age property to each student and return an array identical to the original,  but where each student has an age as well?
const studentWithAges = students.map(student => ({
    id: student.id,
    name: student.name,
    profession: student.profession,
    skill: student.skill,
    age: (student.id === 1) ? student.age = 32: (student.id === 2) ? student.age = 26 : student.age = 28
}));
console.log(studentWithAges)
// [
//     {
//       id: 1,
//       name: 'Mark',
//       profession: 'Developer',
//       skill: 'JavaScript',
//       age: 32
//     },
//     {
//       id: 2,
//       name: 'Ariel',
//       profession: 'Developer',
//       skill: 'HTML',
//       age: 26
//     },
//     {
//       id: 3,
//       name: 'Jason',
//       profession: 'Designer',
//       skill: 'CSS',
//       age: 28
//     }
//   ]

console.log('-------------- map Chaallenge  -----------------')
// Steps
// You will use destructuring assignment to create two variables and you will assign them values from calling the map method on the students array. The function provided
// to the map method can either be created within the map method or outside and passed in but in either case, it should use an arrow function. 
// The map method should return an array for each item in the students array and this new array should contain two items the items name value and the items results value.

// Create variables named john and rest using the destructuring assignment
// Assign the variables values from calling the map method on the students array
// Within the map method either use an arrow function or provide a function created outside of the map method (note this function should also be an arrow function)
// Log out the variable named: john to see its value
// Log out the variable named: rest to see its value
let students1 = [
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
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];
//see destructuring.js for revision
// technique 1(preferred in this case)
let [john,...rest] = students1.map(student => [student.name, student.results])
console.log(john)
console.log(rest)
console.log('\n');

// OR
// technique 2
// create function first and use in map
const mapper = (itm) => [itm.name, itm.results];
let [john1, ...rest1] = students1.map(mapper);
console.log(john1);
console.log(rest1);
