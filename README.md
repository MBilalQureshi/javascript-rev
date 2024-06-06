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

## JavaScript-Specific Data Types
### Determining the Data Type
```
typeof(1);                        // "number"
typeof('Hello world!');           // "string"
typeof(true);                     // "boolean"
typeof(['a', 'b', 'c']);          // "object"
typeof({name: 'John', age: 30});  // "object"
```
```
if (typeof myData === "string") {
  // do something only if myData is a string
}
```
### Number
The Number is one of the primitive data types in JavaScript
While other languages have different types of numbers such as integers (whole numbers), floating point (decimal) numbers and so on, in JavaScript every number is just a number.
**In JavaScript, every number is a floating point number.** That means that unlike in other languages, an integer when compared with it's decimal equivalent will be the same:
```
let myInteger = 123;
let myDecimal = 123.0;
console.log(myInteger === myDecimal);  // true
```
#### Number()
Number() will convert another value such as a string, boolean, or other data type into a number
- Falsy values will be converted to zero
- truthy values will be converted to 1
- values that cannot be converted to a number will be converted to NaN
- numbers greater than or equal to 1.8 x 10^308 will be converted to the constant Infinity (or -Infinity if the number is negative)
```
Number("123");       // 123
Number(null);        // 0
Number(true);        // 1
Number("Hello!");    // NaN (Not a Number)
Number(1.8e308);     // Infinity
Number(-1.8e308);    // -Infinity
```
```
Method/Property	  Purpose	  Usage	  Result
Number.isNaN()	Returns whether the passed value is Not a Number	isNaN("Hello!");	true
Number.isFinite()	Returns whether the passed value is finite	isFinite(Infinity);	false
Number.isInteger()	Returns whether the passed value is an integer	isInteger(123);	true
Number.parseFloat()	Attempts to convert the passed value to a float	parseFloat("123.45");	123.45
Number.parseInt()	Attempts to convert the passed value to an integer	parseInt("123.45");	123
The following are instance methods which operate on a Number instance
toFixed()	Returns a string representing the number with the passed number of decimal places	123.45.toFixed(4);	"123.4500"
toPrecision()	Returns a string representing the number with the passed precision	123.45.toPrecision(4);	"123.5"
toString()	Returns a string representing the number in the specified base (10 by default)	123.45.toString();	"123.45"
```
### Note about float
You learned in the last unit that every number in JavaScript is a floating point number. This means that JavaScript math (or any floating-point math, for that matter), isn't 100% accurate. This is because there are some decimal numbers that cannot be represented perfectly in binary (the language of computers). You cannot represent the fraction 1/3 perfectly in the base 10 (decimal) system: 0.333333...
```
Issue
let decimal = 0.1;
let otherDecimal = 0.2;
let sum = decimal + otherDecimal

console.log(sum);  // 0.30000000000000004
```
```
Potential solution
console.log(0.1 + 0.2);  // 0.30000000000000004
console.log((0.1 * 10 + 0.2 * 10) / 10);  // 0.3

console.log(1.03 + 1.04);  // 2.0700000000000003
console.log((1.03 * 100 + 1.04 * 100) / 100);  // 2.07
```

### Null
null is another of JavaScript's primitive data types and is a representation of the intentional absense of any object value. This means that, effectively, null is used when you want to explicitly represent "nothing". It is often used as the indication that an object could exist, but currently explicitly does not. This is not the same as undefined, which means that an object does exist but it doesn't have any value associated with it.

null is simple to represent. Any time you wish to explicitly declare a value that represents nothing, just declare it as null:
```
let myVariable = null;
```
Above, the declaration of null means that the variable myVariable points to no object. null is falsy in a boolean context and can be used to determine truth:
```
let myVar = null;
console.log(Boolean(myVar));  // false

if (myVar) {
  // will not run; null is falsy
}
```
In a practical sense, you will almost always use null as the condition in a conditional statement, using it to make decisions based on whether a variable is null or not. It can, however, be used to "wipe out" a variable's value. If you want to eliminate a variable's value, just assign null to it. In the future, you may also use it as a substitute for zero-values when writing APIs, because in many cases (for example in a financial context), if a value doesn't exist, representing it as zero is not accurate and may create inaccuracies in financial calculations. Instead, API developers often use null where an object could be expected, but none currently exists.
### undefined
The JavaScript undefined property is used to represent any object that has either not been assigned a value or has not been declared at all. It is a property of the global object and is one of JavaScript's primitive data types. undefined is always available as a variable in the global scope, but is not configurable, manipulatable or enumerable. It is only used to represent a variable or other object which has not been assigned a value or which has not been declared.

The easiest way to understand undefined is with a simple example. Usually, developers declare and assign variables in a single step, like let x = 1;. Suppose however that you declare a variable but do not assign it any value:
```
let x;
```
In this case, the default value assigned to x is undefined. This is confirmed by logging x to the console:
```
let x;
console.log(x);  // undefined
```
Checking explicitly using strict equality:
```
let x;
if (x === undefined) {
  // this will execute
}
```
Using the typeof operator:
```
let x;
if (typeof x === "undefined") {
  // this will execute
}
```
You'll learn in a future unit why we're using === as opposed to == above, but for now, just understand that as a best practice you should always check equality using === because it verifies that the type of the objects is equal also. undefined is falsy in a boolean context, so like null, you can use it to determine truth and make decisions. ***The difference between null and undefined is that null represents an object which has explicitly been assigned a value of nothing, while undefined is a representation that something has either not been declared or has not been assigned a value. It is "unclear" what it is, so it is considered to be undefined.***

### Infinity, -Infinity and NaN
- Infinity: a special constant representing any number larger than about 1.8x10^308
- Infinity: a special constant representing any number smaller than about -1.8x10^308
- NaN: any value which is Not a Number.

isFinite(): returns true if the number is not Infinity or -Infinity

```
let finite = isFinite(12345);
let infinite = isFinite(1.9e308);

console.log(finite);    // true
console.log(infinite);  // false
```

isNaN(): returns true if the passed value is not a number (Note: if you pass a number as a string (e.g. '12345') to isNaN(), it will return false because the string will be coerced, or converted, to a number before it is evaluated. You'll learn more about how this type coercion works in the next unit)
```
let passingString = isNaN("hello!");
let passingNumber = isNaN(12345);
let passingNumberAsString = isNaN('12345');

console.log(passingString);          // true
console.log(passingNumber);          // false
console.log(passingNumberAsString);  // false ('12345' is coerced to a Number) ???????? But why see Type Coercion
```
### Type Coercion
Type coercion in JavaScript is the implicit/automatic conversion of one data type to another. Since JavaScript is a weakly typed language, JavaScript will automatically convert data types to different data types as needed. For example, in JavaScript when you add a string to a number, the number is implicitly converted to a string, and the result is actually the concatenation of the two strings:
```
console.log(1 + "1");  // "11"
```
This is in contrast to languages like Python which do not do this and will instead throw an error, letting you know that it's not possible to add a number and a string together. In the above case, the result "11" is not correct. This also happens in other situations even if two of the same data type are involved in an operation that would normally return a different type. Consider the addition of a series of booleans:
```
console.log(true + false);        // 1
console.log(true + true + true);  // 3
```
Do you see what's going on here? Because the addition operator normally returns a number, and the sum of some number of booleans can't be represented any other way, JavaScript converts the booleans to their binary values (1 for true and 0 for false) and then adds them together. Thus, the first line is converted to 1 + 0, which equals 1, and the second is converted to 1 + 1 + 1 which equals 3. This even happens when adding two numbers together, in some situations

To resolve the above issues, sometimes you'll need to explicitly convert the values you're working with into the proper data type before manipulating them. To resolve the issue with adding a number to a string, either remove the quotation marks from around the string or use the built-in Number() method to convert it to a number:
```
console.log(1 + "1");          // "11"
console.log(1 + 1);            // 2
console.log(1 + Number("1"));  // 2
```
One extremely important consideration with respect to JavaScript's type coercion is the issue of equality. You might recall that there are two ways to check if two things are equal in JavaScript: == and ===. The important thing to realize is that using == implicitly coerces data types! This means that 1 == "1" will return true. In reality, these two things are not equal: one is a string and the other is a number. To get the proper result, you must use ===. This is why it's considered a best practice to always use === when checking equality unless you have a specific reason not to. Doing so will ensure that you will never end up with two things that are not really equal being treated as equal because JavaScript coerced them to the same data type.

Type coercion is a double edged sword. It is helpful because it allows us to assume things and write less verbose code, allowing JavaScript to do some of the work for us, but it also opens the door to difficult to detect bugs since unlike its counterparts that do not implicitly coerce data types, JavaScript will not throw an error when you try to perform operations on data types that are really not compatible.

## Storing Values
Assignment operators in JavaScript are used to assign or reassign values to a variable.
(let, const or var) and a value to assign:
- let x = 1;
- const x = 1;
- var x = 1;
```
[keyword] [variableName] [operator] [value];
   let           x           =         1   ;
```   

```
Operator	  Description	  Example	  Same As
=	Assignment	let x = 5;	x = 5
+=	Addition Assignment	x += 3	x = x + 3
-=	Subtraction Assignment	x -= 3	x = x - 3
*=	Multiplication Assignment	x *= 3	x = x * 3
/=	Division Assignment	x /= 3	x = x / 3
%=	Remainder Assignment	x %= 3	x = x % 3
**=	Exponentiation Assignment	x **= 3	x = x ** 3
```
```
let x = 10; 

x += 1;   // 10 + 1 = 11
x -= 1;   // 10 - 1 = 9
x *= 2;   // 10 * 2 = 20
x /= 2;   // 10 / 2 = 5
x %= 3;   // 10 % 3 = 1 (returns the remainder of 10/3 = 1)
x **= 3;  // 10 ** 3 = 1000 
```

### Basic Math With Arithmetic Operators
PEMDAS
- PE: Parentheses and exponents
- MD: Multiplication and Division
- AS: Addition and subtraction
```
let x = 2;
let y = 3;
let z = 4;

console.log(x + y * z);  // 2 + 12 = 14
console.log((x+y) * z);  // 5 * 4 = 20
```
```
Operator	  Description	  Usage	  Example
+	Addition	result = a + b	2 + 2 = 4
-	Subtraction	result = a - b	2 - 2 = 0
*	Multiplication	result = a * b	2 * 5 = 10
/	Division	result = a / b	10 / 2 = 5
**	Exponentiation	result = a ** b	2 ** 3 = 8
%	Modulo (returns the remainder)	result = a % b	10 % 4 = 2
```
### Incrementing & Decrementing
You can use the increment and decrement operators to declare a new variable and increment/decrement the original one simultaneously, too, by using them either as a prefix or a postfix. If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing. If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing. The following examples are from the MDN website article on incrementing:
```
Postfixing:

let x = 3;
y = x++;

// y = 3
// x = 4
```
```
Prefixing:

let x = 3;
y = ++x;

// y = 4
// x = 4
```

### Comparing Values With Comparison Operators
```
Operator	  Description	  JavaScript Example	  Returns
==	Equal to (loose equality)	console.log(1 == 1)	true
===	Equal to (strict equality)	console.log(1 === "1")	false
!=	Not equal to (loose equality)	console.log(1 != 1)	false
!==	Not equal to (strict equality)	console.log(1 !== "1")	true
>	Greater than	console.log(2 > 1)	true
<	Less than	console.log(2 < 1)	false
>=	Greater than or equal to	console.log(2 >= 1)	true
<=	Less than or equal to	console.log(2 <= 1)	false
```

### Determining Truth With Logical Operators

- The && Operator:
```
a	    b	    a && b
true	true	true
true	false	false
false	true	false
false	false	false
```

- The || Operator:
```
a	    b	    a || b
true	true	true
true	false	true
false	true	true
false	false	false
```

- The ! Operator:
```
a	    !a
true	false
false	true
```
logical operators have a precedence just like the arithmetic operators. ! has the highest precedence, followed by && and then ||. If you need to override the precedence, you can wrap whatever you want to execute first in parentheses in order to give it priority
```
let a = true;
let b = true;
let c = false;
let d = false;

a && b && c && d         // Operators are executed left to right
a || b && c || d         // b && c is evaluated first
(a || b) && (c || d)     // a || b is evaluated, then c || d, then the &&
!(a || b) && (c || d)    // same as above, but (a || b) is negated before the && is evaluated
```

### Equality vs. Strict Equality
- == (Loose Equality): Compares values after coercing them to compatible types
- === (Strict Equality): Compares values without type coercion, comparing the data type as well
```
let a = 1;
let b = "1";

a == b   // true
a === b  // false
```
you should always use strict equality (===) for testing equality in JavaScript unless you have a specfic reason not to. By doing this, you ensure that you will never inadvertently convert any of the items you're comparing to different data types. If you need to determine whether two objects are exactly the same object, **you can also use Object.is()**, which is similar to the **Python is operator** shown in the image here. The Object.is() operator takes two parameters which are the two objects to compare, and returns a boolean depending on whether they are the same object.