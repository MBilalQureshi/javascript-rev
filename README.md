# JavaScript
To run a file use "node filename.js"
## Variables
- use camelCase
- let myVar = "a variable";
- const myVar = "a variable";
- var myVar = "a variable";
### let
 - They have block scope, which means they are only defined within the confines of their own code block (bounded by {curly braces})
- They cannot be redeclared within the same scope. In other words:
```
let myVar = "a variable";
let myVar = "a different variable";  // this will throw a SyntaxError. myVar is already declared.
```
- They can be reassigned, regardless of scope. In other words:
```
let myVar = "a variable";
myVar = "a different variable";  // We're not redeclaring it, rather giving the same variable a new value.
```
### const
- Unlike let variables, constants cannot be reassigned or redeclared. Attempting to redeclare the variable or change its value in any way will fail:
```
const url = "www.google.com";
const url = "www.youtube.com";  // SyntaxError: Identifier 'url' has already been declared
url = "www.google.com";         // TypeError: Assignment to constant variable.

const number = 4;
number = number + 2;            // TypeError: Assignment to constant variable.
number += 2;                    // TypeError: Assignment to constant variable.
```

- Unlike let variables, constants cannot be declared without being assigned a value:
```
let url;    // Ok (url is undefined, but declared)
const url;  // SyntaxError: Missing initializer in const declaration
```

- Arrays and objects stored in constants can be modified, but you can't reassign a new object or array to the same constant:
```
// Define a constant object:
const john = {name: "John", age: 30, location: "US"};

john.age = 31;  // Ok, we're changing the object property, not the constant itself
john['birthday'] = 'April 25';  // Ok, we're modifying the object, not the constant itself
john = {name: "John", age: 31, location: "Ireland"};  // NOT ok, we're changing the constant's value

// Define a constant array:
const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota";  // Ok, we're updating the array element, not the constant itself
cars.push("Audi");   // Ok, we're updating the array, not the constant itself
cars = ["Toyota", "Volvo", "BMW", "Audi"];  // NOT ok, we're changing the constant's value
```

### var
- It has global scope.
- variables declared with var are not restricted with regard to being reassigned, redeclared, or reused in another scope.
- In modern JavaScript it's usually considered a bad practice to use this declaration, because it creates a variable which has global scope, which means it can be unintentionally changed outside of its own scope. for example
```
1.    var i = 0;
2.    
3.    for(var i = 0; i <= 5; i++) {
4.      console.log("Inside the loop:", i);
5.    }
6.    
7.    console.log("Outside the loop:", i);

Output:
Inside the loop: 0
Inside the loop: 1
Inside the loop: 2
Inside the loop: 3
Inside the loop: 4
Inside the loop: 5
Outside the loop: 6
```
Do you see the problem? If not, you're not alone, but look closely at what happened: On line 1 we declared a variable, i, using var, and gave it a value of 0. Then on line 3 we initiated a for loop, declaring a variable i beginning with zero and iterating through 5, incrementing i after each iteration. When the i in the loop is equal to 5, iteration stops, and the final increment takes place (i++), incrementing it to 6. However, when we logged i to the console outside the loop, i has a value of 6! It has been overwritten by the loop's i. This is because variables declared with var are not restricted with regard to being reassigned, redeclared, or reused in another scope.

The bottom line is that var creates a variable which can be easily overwritten anywhere in your code, so in general it is dangerous to use. If you explicitly need to be able to access a variable outside of the scope in which it is declared, however, var is the only way. For example, consider this:
```
createVariable = true;
if (createVariable) {
  let myVar = "Here's your variable!";
}

console.log(myVar);  // ReferenceError: myVar is not defined
```

The above throws a ReferenceError because outside the scope of the if statement (i.e. outside its curly braces), myVar is not defined because it was created within the if statement using let. If you explicitly need access to this variable outside the if statement, you can declare it using var instead:
```
createVariable = true;
if (createVariable) {
  var myVar = "Here's your variable!";
}

console.log(myVar);  // "Here's your variable!"
```

### Global vs Local vs block Scope 
- Global Scope:
In JavaScript, any code that exists at the top level of your application, that is, anything that is not inside any function, loop, conditional statement and so on, has global scope.

- Local Scope:
Any code that exists inside a set of curly braces, for example, code contained within the opening and closing braces of a loop, a conditional statement, or a function, has local scope.

```
// Global scope

if (...) {
  // Local scope
}

// More global scope

function myFunction() {
  // Local scope
}

// More global scope

for (...) {
  // Local scope
}
```

- Block Scope
There is a third type of scope called block scope, too. This is similar to local scope, but refers specifically to the code block the variable exists in. This is relevant when there is nesting in your code, where a variable inside a function might be local, but inside an if statement or loop within the function, anything declared is local only to the loop code blocks.

```
let globalVar = 'a global variable';

function myFunction() {
  let localVar = 'a local variable';
  
  if (localVar) {
    let blockVar = 'a block-scoped variable';
  } else {
    let otherBlockVar = 'a different block-scoped variable';
  }
}
```
## Strings
```
let singleQuotedString = 'He\'s a wild one, that single quoted string...';
let doubleQuotedString = "Confucius say, \"Many backslash make code sad.\"";
```

```
let multiLineString = 'This string has\nmultiple lines.\nHooray!';
// Renders: 
This string has
multiple lines.
Hooray! 
```

- Character - Escape Sequence
- Horizontal Tab	\t
- Newline	\n
- Carriage Return	\r
- Single Quote	\'
- Double Quote	\"
- Backslash	\\

### Template Literals
Creating a template literal is easy. All you have to do is surround the string with backticks(``) instead of single or double quotes. Between the backticks you can use any characters you want including newlines, tabs, quotes and even variables! The interpreter will interpret the string as it's written in the code, which makes this type of string ideal for creating strings of HTML in your JavaScript, while keeping the HTML itself easy to read.
Example 1 with HTML
```
let fourthItem = 'Item 4';
let myHtml = `
  <ol class="item-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>${fourthItem}</li>
  </ol>
`;
```

Example 2 with just JS
```
let namee = "Muhammad Bilal"
let home = "New York"

console.log(`My name is ${namee} and I live in ${home}`)
```

### String Concatenation
Strings can be concatenated too, which means they can be appended to one another to create a new string. Before template literals, this was the only way to insert a variable into a string
```
let myVar = 'a variable!'
let myString = 'This string contains ' + myVar;

console.log(myString);  // This string contains a variable!
```

The process of injecting variables into strings using template literals is called **string interpolation**
```
let fruits = ['apple', 'orange', 'banana'];
let myHtml = '<ol>';

for (let i = 0; i < fruits.length; i++) {
  myHtml = myHtml + '<li>' + fruits[i] + '</li>';
}
myHtml += '</ol>';

// myHtml is now:
<ol>
  <li>apple</li>
  <li>orange</li>
  <li>banana</li>
</ol>
```

This becomes even more elegant when you use template literals to inject the fruit directly into the string without using the additional concatenation. The process of injecting variables into strings using template literals is called string interpolation:
```
let fruits = ['apple', 'orange', 'banana'];
let myHtml = '<ol>';

for (let i = 0; i < fruits.length; i++) {
  myHtml += `<li>${fruits[i]}</li>`;
}
myHtml += '</ol>';
```
The point is that strings can be manipulated easily using the + operator.

### String Methods
- Method/Property	Description
- length	Returns the length of a string
- charAt()	Returns the character at the specified index (position)
- charCodeAt()	Returns the Unicode of the character at the specified index
- concat()	Joins two or more strings, and returns a new joined strings
- endsWith()	Checks whether a string ends with specified string/characters
- fromCharCode()	Converts Unicode values to characters
- includes()	Checks whether a string contains the specified string/characters
- indexOf()	Returns the position of the first found occurrence of a specified value in a string
- lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
- localeCompare()	Compares two strings in the current locale
- match()	Searches a string for a match against a regular expression, and returns the matches
- repeat()	Returns a new string with a specified number of copies of an existing string
- replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
- search()	Searches a string for a specified value, or regular expression, and returns the position of the match
- slice()	Extracts a part of a string and returns a new string
- split()	Splits a string into an array of substrings
- startsWith()	Checks whether a string begins with specified characters
- substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
- substring()	Extracts the characters from a string, between two specified indices
- toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
- toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
- toLowerCase()	Converts a string to lowercase letters
- toString()	Returns the value of a String object
- toUpperCase()	Converts a string to uppercase letters
- trim()	Removes whitespace from both ends of a string
- valueOf()	Returns the primitive value of a String object

```
let myString = 'Welcome to the universe!';
console.log(myString.slice(1));     // 'elcome to the universe!'
console.log(myString.slice(0, 6));  // 'Welcom' (last index is not included)
console.log(myString.slice(0, 7));  // 'Welcome'
console.log(myString.slice(15));    // 'universe!'
```
```
let myString = 'Welcome to the universe!';
console.log(myString.charAt(15));  // u
```
```
let welcome = 'This is a welcome message!';
console.log(welcome.indexOf('welcome'));  // 10 (the index of the w)
console.log(welcome.lastIndexOf('e'));  // 24 (the last 'e' in the string)

// If you need to search a long string, you can also pass both of these a second argument - an integer - to specify the search starting point
console.log(welcome.indexOf('s', 7));  // 20 (the search begins after the first two 's') 
```
```
let title = "caps lock is cruise control for cool";
let upperTitle = title.toUpperCase();
console.log(upperTitle);  // CAPS LOCK IS CRUISE CONTROL FOR COOL
```
```
let myString = "Which letter is the best?";
console.log(myString[0]);  // W
console.log(myString[1]);  // h
console.log(myString[2]);  // i
console.log(myString[3]);  // c
console.log(myString[4]);  // h

// or going backwards!
let len = myString.length;
console.log(myString[len - 1]);  // ?
console.log(myString[len - 2]);  // t
console.log(myString[len - 3]);  // s
console.log(myString[len - 4]);  // e
console.log(myString[len - 5]);  // b
```