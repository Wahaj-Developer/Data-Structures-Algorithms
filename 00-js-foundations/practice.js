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