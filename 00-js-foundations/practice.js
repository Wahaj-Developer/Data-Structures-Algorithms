// --- var vs let: hoisting & temporal dead zone ---

var a1 = 12;
console.log(a1); // 12

let a2 = 12;
console.log(a2); // 12

// var: hoisted with `undefined`, so assigning before the declaration line still works
a3 = 12;
console.log(a3); // 12
var a3;

// let: hoisted but stuck in the "temporal dead zone" until its declaration line runs
try {
  a4 = 12;
  console.log(a4);
  let a4;
} catch (err) {
  console.log(err.message); // Cannot access 'a4' before initialization
}

// --- basic addition ---

let a5 = 10;
let b5 = 12;
console.log(a5 + b5); // 22

// --- number vs string ---

console.log(10 + 1);   // 11  (Number + Number)
console.log("10" + 1); // "101" (String + Number -> concatenation)

// --- mixing number and string in variables ---

let a6 = 12;
let b6 = "13";
console.log(a6 + b6);          // "1213"
console.log(typeof (a6 + b6)); // "string"

// --- concatenation once a string appears in the expression ---

let a7 = 10;
let b7 = 12;
console.log("Sum of 10 and 12" + a7 + b7); // "Sum of 10 and 121012"
// Left to right: string + 10 -> "Sum of 10 and 1210", then + 12 -> "Sum of 10 and 121012"

// --- parentheses evaluate first, like in math ---

console.log("Sum of 10 and 12" + (a7 + b7)); // "Sum of 10 and 1222"

// --- order matters: numbers before the string still get added normally ---

console.log(10 + 12 + "Sum of 10 and 12"); // "22Sum of 10 and 12"

// --- type coercion: "+" concatenates, "-" always does math ---
// "+" has two jobs (add or concatenate), so JS plays it safe and treats it as
// concatenation if either side is a string. "-" only ever means subtract, so
// JS always coerces the string to a number instead. Same behavior for * and /.

console.log("1" + 1); // "11" (+ concatenates)
console.log("1" - 1); // 0    (- always does math)

console.log("4" + 1); // "41"
console.log("4" - 1); // 3

// --- accepting user input with prompt() ---
// prompt() always returns a string, even if the user types digits

// let age = prompt("What is your age?");
// console.log(typeof age); // "string"

// --- type casting: converting on purpose with Number() ---
// Number() converts a value into a number if it's actually able to be
// converted. Converting a value from one data type to another like this
// is called type casting.

// let age = Number(prompt("What is your age?"));
// console.log(typeof age); // "number"

// same thing in two steps
// let ageInput = prompt("What is your age?");
// let age2 = Number(ageInput);

// --- swapping two variables ---
// Swapping = exchanging the values of 2 variables without building a new
// collection to hold them.

// Method 1: using a third variable
// copy a into c, then overwrite a with b, then overwrite b with the saved c
let sa1 = 10;
let sb1 = 20;
let sc1 = sa1;
sa1 = sb1;
sb1 = sc1;
console.log(sa1, sb1); // 20 10

// Method 2: without a third variable, using arithmetic
let sa2 = 10;
let sb2 = 20;
sa2 = sa2 + sb2; // 10 + 20 = 30
sb2 = sa2 - sb2; // 30 - 20 = 10
sa2 = sa2 - sb2; // 30 - 10 = 20
console.log(sa2, sb2); // 20 10