# JavaScript
To run a file use "node filename.js"
## JavaScript Variables
node variables.js
### Variables
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
## Working with Strings in JavaScript
### Strings
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
node dataType.js
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

## JavaScript-Specific Operators
node StoringValLogicalOpsEqualityAndMore.js
### Storing Values With Assignment Operators
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
logical operators have precedence just like the arithmetic operators. ! has the highest precedence, followed by && and then ||. If you need to override the precedence, you can wrap whatever you want to execute first in parentheses to give it priority
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

## JavaScript Flow Control
node ifElse.js
### If/Else Statements
```
if (condition) {
  // code if true
} else {
  // code if false
}
```
```
let a = 1;
let b = 2;
let firstGreater;

if (a > b) {
  firstGreater = true; 
} else {
  firstGreater = false;
}
console.log(firstGreater);
```

### Ternary Expressions in JavaScript
Standard conditional statement:
```
if (condition) {
  // code if true
} else {
  // code if false
}
```
Equivalent ternary expression:
```
condition ? code if true : code if false
```

Ternary expressions are best used for simple conditonals. Because the expression is all on one line, they are not really good for situations where you want to execute multiple lines of code based on one of the conditions. While it's certainly possible to do this with the strategic use of parentheses and semicolons, it is not recommended because the whole point of the ternary is to make your code more concise and easier to read. The most common use for a ternary expression is in assigning a value to a variable where the value you want to assign is dependent on a condition:
```
let myConditionalVariable = someCondition ? trueValue : falseValue
```

```
let memberType = 'basic';
let price = memberType === 'basic' ? 5 : 10;
```

```
let memberType = 'basic';
let price;

if (memberType === 'basic') {
  price = 5;
} else {
  price = 10;
}
```
Equivalent ternary expression:
These expressions can be chained together to test multiple conditions as well, demonstrated here in a ternary conditional that adds a couple more plans to the above logic.
```
let memberType = 'elite';
let price = memberType === 'basic' ? 5
          : memberType === 'pro' ? 10
          : memberType === 'elite' ? 20
          : 0;
```

### Multiple Conditions (If/Else If/Else)
```
if (condition 1) {
  // condition 1 true code
} else if (condition 2) {
  // condition 2 true code
} else if (condition 3) {
  // condition 3 true code
} else if (condition n) {
  // condition n true code
} else {
  // default code
}
```
```
let memberType = 'elite';
let price;

if (memberType === 'basic') {
  price = 5;
} else if (memberType === 'pro') {
  price = 10;
} else if (memberType === 'elite') {
  price = 20;
} else {
  price = 0;
}
console.log(price);  // 20
```

### Switch Case Statements
```
switch (expression) {
  case 'value1':
    // code block 1
    break;
  case 'value2':
    // code block 2
    break;
  case 'valuen':
    // code block n
    break;
  default:
    // default result
}
```
```
let day;
let dayNumber = 2;

switch (dayNumber) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
  default:
    day = 'Invalid day number';
}

console.log(day);  // Tuesday
```
In a function we'll use return instead of break, but obviously, this depends on the situation.

### Nested If/Else Statements
```
if (condition) {

  if (anotherCondition) {
    // executes if both condition and anotherCondition are true
  } else {
    // executes if condition is true and anotherCondition is false
  }

} else {
  // executes if condition is false
}
You can also do this within the else block:

if (condition) {
  // executes if condition is true
} else {

  if (anotherCondition) {
    // executes if condition is false and anotherCondition are true
  } else {
    // executes if both condition and anotherCondition are false
  }

}
```

## JavaScript Iteration
node loops.js
### For Loop
```
for (initializingExpression, condition, incrementingExpression) {
  // code to repeat
}
```
```
let fruits = ['apples', 'oranges', 'bananas', 'cherries'];
let numberOfFruits = fruits.length;

for (let i = 0; i < numberOfFruits; i++) {
  console.log(fruits[i] + ' are delicious!');
}

console.log('I love fruit!');
```

### While
```
while (conditon) {
  // code to repeat
}
```
```
let fruits = ['apples', 'oranges', 'bananas', 'cherries'];
let numberOfFruits = fruits.length;

let i = 0;
while (i < numberOfFruits) {
  console.log(fruits[i] + ' are delicious!');
  i++;
}

console.log('I love fruit!');
```
### Do/While Loops
```
let i = 10;
do {
  console.log('checking i...');
  console.log('i is', i);
} while (i < 10);
console.log('Loop complete');
```

### Controlling Iteration (Break & Continue)
- break: breaks out of the loop entirely.
- continue: continues with the next iteration of the loop, effectively "skipping" an iteration.
```
let i = 0;
while (i <= 1000000) {
  if (i === 5) {
    console.log('Breaking!');
    break;
  }
  console.log(i);
  i++;
}
console.log('Loop has been broken.');
```
```
for (let i = 0; i <= 1000000; i++) {
  if (i === 5) {
    console.log('Breaking!');
    break;
  }
  console.log(i);
}
console.log('Loop has been broken.');
```
Alternatively, you can use the continue statement to skip an iteration of the loop under a certain condition. For example, consider a situation where you only want to log even numbers between 0 and 10:
```
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
console.log('Loop complete.');
```

Labelling:
In the event you're working with a nested loop, you can label your loops in order to continue or break a specific label:
```
let i = 0;
iLoop:
  while (i <= 1000000) {
    let j = 0;
    jLoop:
      while (j <= 100) {
        if (j === 3) {
          console.log('Breaking the outer loop from the inner loop.');
          break iLoop;
        }
        console.log('j is', j);
        j++;
      }

    if (i === 5) {
      console.log('Breaking!');
      break;
    }

    console.log('i is', i);
    i++;
  }
console.log('Loop has been broken.');
```

### Nested Iteration
```
for (let x = 0; x < 3; x++) {
  for (let y = 0; y < 3; y++) {
    let point = [x, y];
    console.log(point);
  }
}
```

## Working With JavaScript Data Structures
In Python, we call them lists.
node dataStructures.js
### Arrays
Declare the array directly using square brackets:
```
let myArray = [value 1, value 2, ... value n];
```
Declare the array using the Array() constructor:(It's recommended that you always use the first method above to declare arrays, since the second method can produce unexpected results.)
```
let myArray = new Array(value 1, value 2, ... value n);
```
```
let cars = ['saab', 'volvo', 'ford'];
console.log(cars[0]);  // 'saab'
console.log(cars[1]);  // 'volvo'
console.log(cars[2]);  // 'ford'
```
.length property to reference the total number of items in the array:
```
let lotsOfElements = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(lotsOfElements.length);

for (let i = 0; i < lotsOfElements.length; i++) {
  console.log(lotsOfElements[i]);
}
```
#### Array Methods
- Popping(pop an item off the end of an array) and pushing elements(push one or more onto the end)
```
let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
let lastItem = fruits.pop();

console.log(lastItem);
console.log(fruits);

let newLength = fruits.push('mangoes');
console.log(newLength);
console.log(fruits);
```
- Shifting(you can pop an item off the front of the array using the shift() method) and unshifting elements(you can add one or more items to the beginning of the array using the unshift())
```
let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
let firstItem = fruits.shift();

console.log(firstItem);
console.log(fruits);

let newLength = fruits.unshift('mangoes');
console.log(newLength);
console.log(fruits);
```
- Deleting and splicing elements(you can delete an item by passing its index to the delete keyword)
```
let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
delete fruits[2];
console.log(fruits);
```
If you run the code though, you'll see it **doesn't actually delete the item, it replaces it with undefined**. The **correct way to truly delete a specific item in an array is to use the splice() method**. To use splice, you specify the **index you would like to begin at and the number of items you want to remove**:
```
let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
fruits.splice(2, 1);  // Remove one item starting at index 2
console.log(fruits);
```
You can **also use splice() to insert elements** into the array at the starting index, by specifying the elements you want to insert in a comma-separated list after the 2nd argument:
```
let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];

// Remove 'cherries', insert 'pineapples' and 'mangoes'
// 'bananas' is shifted to the right
fruits.splice(2, 1, 'pineapples', 'mangoes');
console.log(fruits);
```
**If you don't want to replace any items, but just want to splice some items into the array starting at a specific point, you can specify 0 for the second argument:**
```
let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];

// Insert 'pineapples' and 'mangoes' starting at index 2
// 'cherries' is shifted to the right
fruits.splice(2, 0, 'pineapples', 'mangoes');
console.log(fruits);
```
- Changing the values of specific elements
```
let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
fruits[2] = 'pineapples';
console.log(fruits);
```
- Slicing, sorting and merging
Using the slice() method. The following slices the array and returns only indices 2 through 4 (not including 4). This does not modify the original array:
```
let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
let subset = fruits.slice(2, 4);
console.log(fruits);
console.log(subset);
```
The sort() method will sort the array, by default, from lowest to highest or in alphabetical order. The sorting methodology will differ based on the contents of the array, but usually you will use this to sort numerically or alphabetically:
```
let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
fruits.sort();
console.log(fruits);
```
merge two arrays together using the concat()method
```
let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
let vegetables = ['carrots', 'peas', 'beans', 'lettuce'];
let healthyFoods = fruits.concat(vegetables);

console.log(fruits);
console.log(vegetables);
console.log(healthyFoods);
```
- Testing whether an array includes an element
includes() method, which will return true if the element exists in the array, and false otherwise:
```
let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
let hasApples = fruits.includes('apples');  // true
let hasMangoes = fruits.includes('mangoes');  // false
console.log(hasApples);
console.log(hasMangoes);
```
- Mapping and reducing
```
.map(): executes a given function on every single element of the array. An example might be capitalizing all the elements of an array, or multipling them all by some number.
.filter(): filters the array down to only elements that meet specific criteria. An example might be filtering a list of names down to only names that begin with a certain letter.
.reduce(): reduces all the array elements down to a single result based on a given formula. An example might be reducing an array of numbers down to their sum, by addng them all together.
```

### Objects
Dictionaries in python
```
let object = {
  property1: value1,
  property2: value2,
  property3: value1,
  ...
  propertyN: valueN
}
```
#### Computed Property names
Computed property names allow you to put a value or an expression in brackets [], which will be computed and used as a objects key.

In the previous lessons on objects, you learned about object keys and values, and how you can create either an empty object and then create the keys and values.
```
let person = {}
person.name = "john";
console.log(person.name) → john
```
Or you can create the same object as follows
```
let person = {name: "john"};
console.log(person.name) → john
```
Computed property names gives us another way to do this, so let"s look at an example.
```
let prop = "name";
let person = {[prop]: "john"};
```
So we have created a variable and we want the value assigned to it to be the name of a key in the person object and to do this we have added the variable name wrapped in [] in the object where we would normally place the key.

So now if you log out person.name you would get john even though looking at the object there is no key name.
```
console.log(person.name) → john
```
But you can also access that value of that key like
```
console.log(person[prop]) → john
```
So we can see from doing: let prop = "name" using [prop] in the object is the same as doing {name: "John"}

So that was using a value as a computed property, what is using an expression as a computed property?

Let"s adjust our example.
```
let prop = "name";
let person = {
    [prop]: "john", 
    lastName: "smith",
    ["full" + prop]: "john smith"
};
```
Ok so we have added ["full" + prop]: "john smith" So now we have a computed expression and the key evaluates to fullname
```
console.log(person.fullname) → john smith
```
Why learn this? When what you have been taught does the same and probably is easier to understand? For most cases when working with objects you will not use this syntax.

We have shown you so that you will recognise this syntax {[prop]: value}. You may see it in production code or if you study the JavaScript React framework later on. You won't need this now, but you can always refer back to it for a refresher later.

#### Getting & Setting Object Properties
You can access these property names using either square bracket notation (myObject['someProperty']) or dot notation (myObject.someProperty), though the latter is the preferred way in modern JavaScript.
```
let person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30,
  location: 'USA'
}
```
There are four things we can do with this person object:

- Read its properties
- Create new properties
- Update its existing properties
- Delete its properties

Read its properties
```
console.log(person['firstName']);  // 'John'
console.log(person.lastName);  // 'Smith'
```
Create new properties
```
person['bestFriend'] = 'Mike';
console.log(person['bestFriend']);  // 'Mike'

person.wife = 'Mary';
console.log(person.wife);  // 'Mary'

console.log(person);
```
Update its existing properties
```
person['age'] = 31;
console.log(person['age']);  // 31

person.location = 'Spain';
console.log(person.location);  // 'Spain'
```
Delete its properties
```
delete person['lastName'];
delete person.age;
console.log(person);
```
Note: Trying to access a property that doesn't exist will not throw an error; it will return undefined. Technically, any property that doesn't exist on an object will be undefined, so while accessing a property that has been deleted will still return undefined, if you log the object to the console the property is gone. For all intents and purposes, deleting an object property does effectively remove the property from the object.


#### Object Methods
1. Static methods
Static methods are methods that exist on the Object constructor itself. They usually take an object as an argument and return some property or characteristic of that object. Common static methods you may use include Object.keys() and Object.values(), which return the passed object's properties and values, respectively. Another common static method is Object.entries(), which returns an array of the object's property/value pairs.
- First, you can use the static methods Object.keys() and Object.values() to get the object's properties (keys) and values, respectively. Object.entries() can also be used to achieve the same thing, but returns the result in an array of property/value pairs. 
```
let car = {
  location: 'garage',
  ignition: 'off',
  fueled: true,
};

console.log(Object.keys(car));
// returns ["location", "ignition", "fueled"]

// Unsupported on JavaScript Tutor
console.log(Object.values(car));
// returns ["garage", "off", true]

console.log(Object.entries(car));  
// returns [Array(2), Array(2), Array(2)]
// Expanded view of the three arrays:
// 0: (2) ["location", "garage"]
// 1: (2) ["ignition", "off"]
// 2: (2) ["fueled", true]
```
2. Instance methods
Instance methods on the other hand are methods that require a specific object instance to operate on. Two you will probably use are Object.instance.hasOwnProperty(), which returns whether an object has a property in its own definition (rather than inheriting it from another object) and Object.instance.toString(), which returns a string representation of the object.
```
let car = {
  location: 'garage',
  ignition: 'off',
  fueled: true,
};

console.log(car.hasOwnProperty('ignition'));  // true
console.log(car.hasOwnProperty('drive'));  // false
```
You can also use the toString() method to return a string representation of the object:
```
let car = {
  location: 'garage',
  ignition: 'off',
  fueled: true,
};
console.log(car.toString());
```
Notice how the representation returned is [object Object]. This is because we haven't defined the toString() method on this specific object (the car), so it's inherited from the global object which all objects inherit from. You'll learn to override this in the next unit.
3. Methods you create
Methods you create are instance methods that you yourself have added as properties on the object. This type of method is a just a property on the object whose value is a function that you can call in order to execute some code.
```
let car = {
  location: 'garage',
  ignition: 'off',
  fueled: true,
  start: function() {
    this.ignition = 'on';
  }
};

console.log(car.ignition);
car.start();
console.log(car.ignition);
```
This jumps ahead a little bit but it's pretty simple to understand. We just created a property called start just like creating any other property, except this time its value is a function instead of a string, boolean, integer, or something else. The this in the start method refers to the car object itself, so when we call the function by using car.start();, ignition is changed to on. The function doesn't return anything, it just changes the ignition property to on.

#### The 'this' Keyword
At the end of the last unit you saw how you can create an object (a car) and give it a start() method. In that method there was a reference to the this keyword:
```
let car = {
  location: 'garage',
  ignition: 'off',
  fueled: true,
  start: function() {
    this.ignition = 'on';
  }
};
console.log(car.ignition);
car.start();
console.log(car.ignition);
```
In the above code, this refers to the object it is a part of: the car. The this keyword has different meanings depending on the context in which it is used, but you'll most likely see it used in two main ways:

In a method, this refers to the object that owns the method. If the method isn't owned by any object, then this refers to the global object.
In an event (like when a user clicks on something), this refers to the element that received the event (e.g. the thing they clicked on).
Let's look at some examples of the above scenarios. The first item in the list above is exactly what you've seen with the car object in the previous unit. The start() method is owned by the car object, so within that method, this refers to the car. That means that any time we want to access a property of the car we can use this to reference it. To demonstrate, let's add some more methods to the car:
```
let car = {
  location: 'garage',
  ignition: 'off',
  fueled: true,
  start: function() {
    this.ignition = 'on';
  },
  drive: function() {
    this.location = 'street';
  },
  park: function() {
    this.location = 'garage';
  },
  refuel: function() {
    this.location = 'gas station';
    this.fueled = true;
  },
  stop: function() {
    this.ignition = 'off';
  },
};
```
Above, the bolded references to this.ignition, this.location and this.fueled refer to those properties on the car object. Because the car "owns" all those methods (start, stop, refuel and so on), this refers to the car, and allows you to access it from inside each method to modify the car's properties.
```
// Now we can "use" the car:
car.start();
console.log(car.ignition);
car.drive();
console.log(car.location);

// Ran out of gas!
car.fueled = false;
car.refuel();
console.log(car.location);
console.log(car.fueled);

// Let's go home
car.drive();
console.log(car.location);
car.park();
console.log(car.location);
car.stop();
console.log(car);
```
Again, throughout the above code the keyword this always refers to the car, so we can use it to perform all sorts of operations on the car's other properties. If someone renamed the car object to something else, like truck, everything would still work with the new name since the reference to the object itself is stored in this. However, if you take one of the methods out of the car object and assign it in the global context, it no longer has any reference to the car, so this becomes undefined:
```
let car = {
  location: 'garage',
  ignition: 'off',
  fueled: true,
  start: function() {
    this.ignition = 'on';
  },
  // ...
};

// car.start is a function, so really
// all we're doing here is defining it again
// under a new name to demonstrate this concept
let myStartFunction = car.start;
myStartFunction();  // TypeError
```
In JavaScript Tutor, this code will throw an error because once the start() function is removed from the car object, the connection between this and the car is gone, so this no longer has an ignition property.

The second common way you'll use this is to refer to an HTML element. You'll see this a lot, since you will often use JavaScript to handle events within the context of HTML elements. In this context, this refers to the element you're operating on. You'll explore this further in later units but here's an example:
```
<button onclick="this.style.color='blue'">Click to Change My Text Color!</button>
```
When you click the button, its text changes to blue since thanks to the onclick property on the button object which sets this.style.color to blue. As you work with JavaScript more and more, you'll often find yourself making changes to HTML elements and in this context you should remember that this always refers to the element itself. In the above code, it refers to the button, allowing the user to change its text color when clicked.

**this in JavaScript: First, to refer to an object from inside it, and second, to reference an element that a user is interacting with.**

### Iterating Data Structures
- for
```
let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];

for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}
```
- for...of
```
let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];
for (let i of food) {
  console.log(i);
}
```
- for...in
```
let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];
for (let i in food) {
  console.log('index', i, 'is', food[i]);
}
```

If you're working with an object, you can use a for...in loop to iterate over its properties and thus get its values. Here, i refers to the object properties (e.g. dog, cat, fish, python):
```
let petNames = {
  dog: 'Fido',
  cat: 'Max',
  fish: 'Bubbles',
  python: 'Mr. Slithers',
}

for (let i in petNames){
  console.log(petNames[i], 'is a', i);
}
```
Another approach
```
let petNames = {
  dog: 'Fido',
  cat: 'Max',
  fish: 'Bubbles',
  python: 'Mr. Slithers',
}

let pairs = Object.entries(petNames);
for (let pair of pairs){
  console.log(pair[1], 'is a', pair[0]);
}
```

1. Standard for loop: i is an array index
2. for...of loop: i is an array element/value
3. for...in on an array: i is an array index
4. for...in on an object: i is an object property

### Nested Data Structures
It is possible and common to nest data structures inside one another. This is common in all programming languages and gives developers a way to create complex arrangements of data, in particular in API development. As you know by now, the two main data structures you'll work with are arrays and objects. There are four ways to nest these structures:

- An array as an array value
- An object as an array value
- An array as an object property
- An object as an object property

1. Array values are accessed by their index in the array in square brackets
2. Object values are accessed by their property (key) names using dot notation
- If you can easily identify an array (enclosed in [square brackets]) and an object (enclosed in {curly braces}),
```
let company = {
  name: 'Apple, Inc',
  founded: 1976,
  financials: {
    incomeStatement: {
      years: [2020, 2019, 2018],
      revenue: [125, 120, 115],
      costs: [100, 100, 100],
      profit: [25, 20, 15]
    },
    balanceSheet: {
      years: [2020, 2019, 2018],
      assets: [200, 190, 180],
      liabilties: [100, 95, 90],
      equity: [100, 95, 90]
    },
    cashFlow: {
      years: [2020, 2019, 2018],
      operating: [75, 65, 55],
      investing: [22, 20, 18],
      financing: [-94, -80, -75]    
    }
  },
  competitors: ['Microsoft', 'Amazon', 'Samsung']
}

console.log(company.name);
console.log(company.competitors);
console.log(company.competitors[0]);
console.log(company.financials.incomeStatement.years);
console.log(company.financials.incomeStatement.revenue[0]);
```
What about utilizing Math.max() or Math.min() within one of the financial arrays to find their highest profit? How would you find the highest profit's associated year? It's not critical you solve all these problems right now, but consider the approaches you might take to solve them.

## JavaScript Functions & Objects
node functions.js

### Taking Parameters & Returning Results
```
function addTwo(num1, num2) {
  return num1 + num2;
}
addTwo(3, 5);
```
```
function someFunctionName(p1, p2, ... pN) {
  // code to execute
  // can use p1, p2, ... pN as variables

  return someResult;
}
```
### Calling Functions
```
// Define an array of arrays (nested data structure)
let operands = [
  [3, 5],
  [8, 6],
  [1, 2],
  [9, -2]
];

// Define a function with parameters
function addTwo(num1, num2) {
  return num1 + num2;
}

// Create an empty array to hold the sums
let sums = [];

// Use a for loop to iterate the operands and call addTwo()
for (let pair of operands) {
  let sum = addTwo(pair[0], pair[1]);  // array indexing + function call
  sums.push(sum);  // array methods
}

// Log the sums
console.log(sums);
```
- operands is a nested data structure
- addTwo() is a function with parameters, which returns a result
- A for...of loop is used to iterate the operands array of arrays
- Since each element of the operands array is an array itself, we use array indexing to get each element's first (index 0) and second (index 1) values
- We pass these values to the addTwo() function as arguments to get their sum, and store it in a variable
- We use the built in push() method (aka function) to push the sum into the array of sums

### Built-in Functions - Working With Math
### Built-in Functions - Working With Date Objects
## JavaScript Best Practices

# Introduction to Advanced JavaScript
ES6 as a whole is nothing but a more succinct syntax for writing JavaScript code. When an application using ES6 runs, the ES6 code is transpiled, or converted, into regular JavaScript.

## Arrow Functions
node arrowFunctions.js

Allows us to write more concise JavaScript functions

Usually, ES6 arrow functions are defined as constants.
This ensures that they can't be overwritten or misused later in the code, and also that
they must be defined before being called.

for more understanding see arrowFunctions.js file.

## Spread, rest and destructuring 
### The Spread Operator
node spreadOp.js
Gives us more powerful ways of manipulating JavaScript arrays

By using the ... three dots operator in an array or object

### Rest Parameter Syntax
node rest.js
- Allows us to handle the contents of arrays of multiple lengths

- By using the ... three dots rest parameter

- Rest Parameter Syntax works in the opposite  direction from the spread operator. Where the spread operator can break an array into  its individual elements, the rest parameter syntax combines individual elements into an array. It can  also be used to represent the “rest” of the values  