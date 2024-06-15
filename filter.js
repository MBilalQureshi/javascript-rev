console.log('-------------- Simple Filtering -----------------')
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
const oldEnough = people.filter(person => person.age >= 20)
console.log(oldEnough)

const paul = people.filter(p => p.name === 'Paul')//[ { name: 'Paul', age: 18 } ] 
const paul1 = people.filter(p => p.name === 'Paul')[0]//{ name: 'Paul', age: 18 }
console.log(paul)
console.log(paul1)

console.log('-------------- Complex Filtering -----------------')
// Sometimes, filtering can get quite complex.  
// Because of this it’s not uncommon to  see the callback function, that is,  
// the function that actually does the filtering,  defined outside the call to the filter method.

// goal is to create a list of job interview  candidates by filtering out any students who  
// don’t have at least 5 years of experience  in at least one skill. So, when I’m done,  
// I should be left with only Mark and Jason,  since Ariel has a max of 4 years of experience.  
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

//NOTE: if you have a complex filter, I recommend you do it this way to keep  your code readable and your intentions clear.  

// I’m going to approach this by filtering the inner skills array to only those  skills with at least five years of experience
const has5yearsExp = skill => skill.yrsExperience >=5; // LINE 3
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0; // LINE 2
//The first thing we know we need to do is filter  the students array , LINE 1
const candidates1 = students.filter(hasStrongSkills)
console.log(candidates1) // LINE 4

//Map mini task
const candidatesName = candidates1.map(nameOnly => (nameOnly.name)) //LINE 5
console.log(candidatesName)

console.log('-------------- Filtering Challenge -----------------')
// You will create a single line of code that should filter the students array and return only the items whos maths scores are greater than or equal to  90. 
// As this needs to be done in a single line of code, you will also be required to use an arrow function that does not have a return statement.


// Create a variable named: topMaths using the const keyword
// Assign it a value from using the filter method on the students array
// Use a single line arrow function within the filter method (should not use a return statement)
// Log out the variable topMaths

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
        results: {science: 84, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 67, english: 87, art: 95},
    }
];

const topMaths = students1.filter(s => s.results.maths >= 90)
console.log(topMaths)
