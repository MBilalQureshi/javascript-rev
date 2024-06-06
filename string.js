// Define the haiku variable here:
let haiku = "Power down your brain\nMotion will now take over\nRide this inertia"
// This will log your haiku to the console:
console.log(haiku);

// --------------------------------------------

console.log('-------------- Template Literals -----------------')
let namee = "Muhammad Bilal"
let home = "New York"

console.log(`My name is ${namee} and I live in ${home}`)

console.log('-------------- String Concatenation -----------------')
let greeting = "Hello";

let fullGreeting = greeting + ', ' + namee + '!';
console.log(fullGreeting);

console.log('-------------- String Methods -----------------')
// WAY CI SOLVED IT
// These variables will be sliced and concatinated
// to form the emailAddress variable:
let fullName = 'Andrew Martin';
let domainName = 'gmail';
let tld = 'com';

// Define the emailAddress variable here.
// Remember to use the slice() and toLowerCase() string methods:
let emailAddress = fullName.slice(0, 6).toLowerCase() + '.' + fullName.slice(7).toLowerCase() + '@' + domainName + '.' + tld;

// This will log the emailAddress variable to the console
console.log(emailAddress);

// way I SOLVED IT
let fullName1 = 'Andrew Martin1';
let domainName1 = 'gmail';
let tld1 = 'com';

let emailAddress1 = (fullName1.toLowerCase()).replace(' ','.')+ '@'+ domainName1+ '.'+ tld1;

console.log(emailAddress1);
