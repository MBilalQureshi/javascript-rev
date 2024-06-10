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