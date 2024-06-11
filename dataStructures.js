console.log('-------------- Arrays -----------------')
let clothes = ["shirt", "shoes", "socks", "hat", "vest", "shorts", "skirt", "scarf"];

// Write your code here
let varOne = clothes[0];
console.log(varOne);
let varTwo = clothes[5];
console.log(varTwo);
let varThree = clothes[4];
console.log(varThree);
console.log('-------------- Looping through Arrays -----------------')

for(let i = 0; i < clothes.length; i++){
    console.log(clothes[i])
}
console.log('-------------- A few methds on Arrays -----------------')
let crew = ["Jean-Luc", "Wesley", "Warf", "William", "Data", "Tasha"];
console.log(crew);

let lastCrewMember = crew.pop()
console.log(lastCrewMember)
console.log(crew)
crew.sort()
console.log(crew)
let newCrew = crew.slice(1,4)
console.log(newCrew)
newCrew.push('Guinan')
console.log(newCrew)

console.log('-------------- Objects / Dictionaries -----------------')
let spaceship = {
    name : "Red Dwarf",
    type : "Mining vessel",
    owner : "Jupiter Mining Corporation",
    captain : "Frank Hollister"
}
console.log(spaceship)

let data = {
    firstName: "Arthur",
    lastName: "Dent",
    species: "Human"
};

// add your code here
let firstName = data["firstName"];
console.log(firstName);

let species = data.species;
console.log(species);

data.age = 42;

// this will log the data to the console
console.log(data);

console.log('-------------- This keyword -----------------')

let classroom = {
    numOfStudents: 0,
    schoolHours: false,
    playtime: false,
    openSchool: function(){
        this.schoolHours = true;
        this.numOfStudents = 20;
    },
    breakTime: function(){
        if(this.schoolHours){
            this.playtime = true;
        }
    },
    closeSchool: function(){
        this.schoolHours = false;
        this.numOfStudents = 0;
    } 
};

console.log(`School Closed and number of students are:${classroom.numOfStudents}`)
classroom.openSchool();
console.log(`School opened and number of students are:${classroom.numOfStudents}`)
classroom.breakTime();
console.log(`Break happened so play time is now:${classroom.playtime}`)
classroom.closeSchool();
console.log(`School Closed and number of students are again:${classroom.numOfStudents}`)

console.log('-------------- Iterating Data Structures -----------------')

let gamerScores = {
    john: 89,
    paul: 725,
    george: 553,
    robert: 9302,
    steve: 733,
};

// write your code here
for(let gamer in gamerScores) {
    console.log(`${gamer} scored ${gamerScores[gamer]}`);
}

console.log('-------------- Nested Data Structures -----------------')

let studentData = [
    {
        name : "John Smith",
        email: "john@gmail.com",
        subjects: ["Math", "Psychology", "Physics", "Chemistry", "Biology"]
    },
    {
        name : "Mary Jones",
        email: "mary@gmail.com",
        subjects: ["Fine Art", "Music", "Biology", "Geography", "Politics"]
    }
];

console.log(studentData);