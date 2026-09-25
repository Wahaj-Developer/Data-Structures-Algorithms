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

// --- swapping with destructuring assignment ---
// destructuring: put the values into an array, then reassign them back in
// the opposite order, all in one line — that's the whole swap in one shot

let a8 = 10;
let b8 = 20;
[a8, b8] = [b8, a8];
console.log(a8, b8); // 20 10

// --- division & Math.floor ---
// division doesn't stop at the decimal point on its own, so if I only want
// the whole-number part, I strip everything after the point with Math.floor()

let a9 = 12;
let b9 = 22;
console.log(a9 / b9);             // 0.5454545454545454
console.log(Math.floor(a9 / b9)); // 0

// --- modulo (%): division gives the quotient, modulo gives the remainder ---

let a10 = 7;
let b10 = 2;
console.log(a10 % b10); // 1  (7 / 2 -> quotient 3, remainder 1)
console.log(b10 % a10); // 2  (2 / 7 -> quotient 0, remainder 2)

// --- relational operators ---

console.log(5 < 10);    // true   (< less than)
console.log(10 > 5);    // true   (> greater than)
console.log(10 >= 5);   // true   (>= greater than or equal to)
console.log(10 <= 10);  // true   (<= — my notes mislabeled this one, see README)
console.log(5 == "5");  // true   (== loose equality: value only, ignores type)
console.log(5 === "5"); // false  (=== strict equality: value AND type)
console.log(5 != "5");  // true   (!= loose inequality: values differ, ignoring type)
console.log("5" !== "5"); // false (!== strict inequality: value or type differs)

// --- logical operators ---
// && (AND): true only if every statement is true
// || (OR): true if at least one statement is true
// (the && example from my notes doesn't check out math-wise -- see README note)

console.log(10 > 6 || 8 < 9); // true (OR: 10 > 6 alone is already true)

// --- unary operators: post-increment vs pre-increment ---

// post-increment: use the value first, THEN increment it
let a12 = 10;
let b12 = a12++;
console.log(a12); // 11
console.log(b12); // 10

// pre-increment: increment FIRST, then use the new value
let a13 = 10;
let b13 = ++a13;
console.log(a13); // 11
console.log(b13); // 11

// -- (decrement) follows the same pattern: post-decrement subtracts after
// using the value, pre-decrement subtracts before using it

// --- combining i++ and ++i in one expression ---

let i14 = 11;
let j14 = i14++ + ++i14;
console.log(j14); // 24

let a15 = 11;
let b15 = 12;
let c15 = a15++ + ++b15;
console.log(a15); // 12
console.log(b15); // 13
console.log(c15); // 24

let a16 = 11;
let b16 = 12;
let c16 = a16 + b16 + a16++ + b16++ + ++a16 + ++b16;
console.log(a16); // 13
console.log(b16); // 14
console.log(c16); // 73

// --- incrementing a boolean: JS coerces true/false to 1/0 first ---

let a17 = true;
++a17;
console.log(a17); // 2

// --- ++ and -- only work directly on a variable, not on a literal or on
// the result of another expression. Both of these are actually SyntaxErrors
// thrown while the code is being parsed (not regular runtime errors), so
// they can't sit as plain statements in this file without breaking it --
// wrapped in eval() here just so I can still demonstrate + catch them.

try {
  eval("++11;");
} catch (err) {
  console.log(err.message); // Invalid left-hand side expression in prefix operation
}

try {
  let a18 = 10;
  eval("--(a18++);");
} catch (err) {
  console.log(err.message); // Invalid left-hand side expression in prefix operation
}

// --- Math.ceil vs Math.floor vs Math.trunc ---

console.log(Math.ceil(10.1));   // 11
console.log(Math.floor(10.9));  // 10
console.log(Math.trunc(18.98)); // 18

// --- Math.pow, Math.sqrt, Math.cbrt ---

console.log(Math.pow(2, 5)); // 32
console.log(Math.sqrt(16));  // 4
console.log(Math.cbrt(8));   // 2

// --- Math.abs, Math.min, Math.max ---

console.log(Math.abs(-10));           // 10
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5

// --- Math.random: always a decimal between 0 (inclusive) and 1 (exclusive) ---

console.log(Math.random()); // e.g. 0.3821...

// --- problem: generate a random 4-digit OTP ---

// Method 1: inline
console.log(Math.trunc(Math.random() * 9000 + 1000));

// Method 2: stored in a variable
let otp19 = Math.trunc(Math.random() * 9000 + 1000);
console.log(otp19);