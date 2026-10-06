// --- if / else: valid voter ---

let age = 20;
if (age >= 18) {
  console.log("The voter is valid");
} else {
  // age < 18
  console.log("The voter is not valid");
}
// Output: The voter is valid

// --- structure with more conditions ---
// the chain starts with "if", extra conditions go in "else if", and ends with "else"
//
// if (condition) {
//   // statement 1
// } else if (condition) {
//   // statement 2
// } else if (condition) {
//   // statement 3
// } else {
//   // statement 4
// }

// --- isNaN(): check whether a value is NaN ---

// let userAge = Number(prompt("What is your age?"));
// if (isNaN(userAge)) {
//   // statement
// }

// NaN === NaN gives false, so the way to check for NaN is isNaN()
console.log(NaN === NaN); // false
console.log(isNaN(NaN));  // true

// --- problem: shop bill discount (first method, in progress) ---
// 0 - 5000 -> 0% | 5001 - 7000 -> 5% | 7001 - 8000 -> 10%
// 8000 - 9000 -> 15% | more than 9000 -> 20%
// Only the "more than 9000" branch is written so far.

// let bill = Number(prompt("What is the bill?"));
let bill = 10000;
if (bill > 9000) {
  let discount = bill * 20 / 100;
  let finalBill = Math.floor(bill - discount);
  console.log(finalBill); // 8000
}