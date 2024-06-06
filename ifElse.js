console.log('-------------- If/Else -----------------')

let a = 10;
let b = 20;
let result;

// Write your if statement here:
if(a < b){
    result = "a is smaller"
}
else{
     result = "a is not smaller"
}

console.log(result);

console.log('-------------- Ternary Expressions in Js -----------------')
result = (a < b) ? 'a is smaller' : 'a is not smaller'
console.log(result)

console.log('-------------- Multiple Conditions (if, else if & else) -----------------')

let age = 15
if(age > 21){
   result =  'drink zumzum'
}
else if(age > 18)
{
    result =  'drink water'
}
else if(age > 12){
    result =  'drink cold water'
}
else{
    result =  'drink apple juice'
    
}
console.log(result)

console.log('-------------- Switch Case Statements -----------------')

let result1 = ''; 
let errorType = "page";

// write your code here
switch(errorType){
case "username":
    result1 = "That username is incorrect, please try again."
    break
case "password":
    result1 = "Incorrect password, please try again."
    break
case "page":
    result1 = "Sorry this page doesn't exist."
    break
default:
     result1 = "Error message unknown"
}
console.log(result1)

console.log('-------------- Nested If/Else Statements -----------------')

let user = true;
let emailVerified = false;
if(user === true){
    if(emailVerified === true){
        console.log("Welcome to our web-site")
    }else{
        console.log("Please verify your email")
    }
}
else{
    console.log("You need to be a user to visit this page")
}