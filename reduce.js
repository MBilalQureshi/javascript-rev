console.log('-------------- Reduce without default Accumulator value -----------------')
// IMPORTANT: AS the accumulator was not defined the reduce methods simple took initial default Accumulator value from index 0 of array which is 1
const nums = [1,1,2,3,4]
let sum  = nums.reduce((acc, curr) => {
    console.log(
        "Accumulator:",acc,
        "Current Value",curr,
        "Total:",acc+curr
    );
    return acc + curr
});
console.log(sum)
console.log('-------------- Reduce with default Accumulator value -----------------')
// IMPORTANT: If default Accumulator value is defined it'll take it as initial value
const nums1 = [1,1,2,3,4]
let sum1  = nums1.reduce((acc, curr) => {
    console.log(
        "Accumulator:",acc,
        "Current Value",curr,
        "Total:",acc+curr
    );
    return acc + curr
}, 20); // initial acc value is set to 20
console.log(sum1)
console.log('-------------- Reduce with default Accumulator value, above code was just for explanation and can be achieved with single line -----------------')
const nums3 = [1,1,2,3,4]
let sum3 = nums3.reduce((acc, cur)=> acc + cur ,20);
console.log(sum3)

//PART 2
console.log('-------------- Totaling a specific object property -----------------')

// Summing an array of numbers:


const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    },
    {
        name: 'Ali',
        profession: 'Painter',
        yrsExperience: 1
      }
  ];
const totalExp = teamMembers.reduce((acc, cur)=> acc + cur.yrsExperience, 0)
console.log(totalExp)
  
console.log('-------------- Grouping by a property, and totaling it too -----------------')
// We’re going to use reduce to  
// group our team members by profession and find  the total experience for each profession.   
// We’ve got two developers, totaling 12 years experience  and two designers totaling 4 years of experience.
// To accomplish this I first need to consider what  kind of result I want back, like an integer,  
// an array, an object or something else. The type  of result I want back will determine the initial  
// value I should start with. In this case, an  empty object {} is probably good, because then  
// in the callback function we can add a developer  property and a designer property, and their values  
// will be the total years of experience for each profession.
// WHAT WE WANT -> {developer: 12, Designer: 4} and so on if new profession is added in above array
let expProfessions = teamMembers.reduce((acc, curr)=> {
    let key = curr.profession;
    if(!acc[key]){
        acc[key] = curr.yrsExperience;
    }else{
        acc[key] += curr.yrsExperience;
    }
    return acc;
}, {})
console.log(expProfessions)

console.log('-------------- Challenge -----------------')
// You will use the reduce method to execute a function on each item resulting in a single object. The object should be that of the student with the highest
// english score and should show the student's name and english score. 
// You can either create the arrow function within the reduce method. or create an arrow function outside and pass it into the reduce method.
// Keep an eye open for spots to use destructuring, You will not be tested to see if you have done this, but it would be good for getting in more practice.

// Create a variable named biggest using the keyword const
// Assign it a value from using the reduce method on the students array
// Use either an arrow function inside the reduce method, or create a function and pass it into the reduce method
// Use a default value with the reduce method
// log out the variable biggest to see the value
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
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];
const biggest = students.reduce((acc, cur) => {
    acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
    return acc;
    }, {name: '', max: 0});
console.log(biggest);

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name:n, results:{english}}) => {
    if(max < english) {
        acc = {name:n, max: english};
    }
    return acc;
    }, {name: '', max: 0});
    
console.log(biggest);
*/
