//Data and Variables

//console.log("This does not print.");

console.log("Hello, World!"); //comments do not have to start at ths beginning of a line.

/* Here is how
to have
multi-line
comments. */

console.log("Comments make your code more readable by others.");

// use \n to create a new line
console.log("Python\nJavaScript\nJava\nC#\nSwift");
// use \t to create tab space
console.log("Python\tJavaScript\tJava\tC#\tSwift");

// typeof operator displays the datatype
console.log(typeof "Hello, World");
console.log(typeof 17);
console.log(typeof 3.14);
console.log(typeof "17");

// commas are not allowed in integers 
console.log(42, 000);

// string to a number that is NAN
console.log(Number("23bottles"));

//convert number to a string using typeof
console.log(typeof String(123.45));

//declating and initializing Variables with let

//Declare the Variable
let programmingLanguage;
//initializing the Variable
programmingLanguage = "JavaScript";

//Variable Types

//Numbers
let myAge = 17;

//Strings
let dolphinGoodbye = "So long and thanks for all the fish";

//Booleans
let iAmAlive = true;
let test = 6 < 3;

//Arrays
let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];

myNameArray[0]; //should return 'Chris'
myNumberArray[2]; //should return 40

//Objects (In programming, an object is a structure of code that models a real-life object.)
let dog = { name: 'Spot', breed: 'Dalmation' };
dog.name

//constants — a value that once declared can't be changed. 
//const daysInWeek = 7;
//const hoursInDay = 24;

//find the sum
let sum = 1 + 2;
console.log(sum);

//Arithmetic Operators

//Addition (+)	Adds the two operands	2 + 3 returns 5
console.log(2 + 3);

//Subtraction (-)	Subtracts the two operands	2 - 3 returns -1
console.log(2 - 3);

//Multiplication (*)	Multiplies the two operands	2 * 3 returns 6
console.log(2 * 3);

//Exponentiation (**)	Calculates the base (first operand) to the exponent (second operand) power, that is, baseexponent	3 ** 2 returns 9
console.log(2 ** 3);
console.log(3 ** 2);

//Modulus (%)	Aka the remainder operator. Returns the integer remainder of dividing the two operands.
console.log(7 % 5);

//Increment (++)	Adds one to its operand. If used before the operand (++x), returns the value of its operand after adding one; if used after the operand (x++), returns the value of its operand before adding one.


//Decrement (--)	Subtracts one from its operand. The return value is analogous to that for the increment operator.

/* Compound Assignment Operators
Operator name	Shorthand	Meaning
Addition assignment	a += b	a = a + b
Subtraction assignment	a -= b	a = a - b
Multiplication assignment	a *= b	a = a * b
Division assignment	a /= b	a = a / b */