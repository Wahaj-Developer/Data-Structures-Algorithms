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

// --- ternary operator ---
// using both ? and : makes it a ternary operator
// structure: condition ? answer if true : answer if false

12 > 13 ? console.log("Wahaj") : console.log("Waji"); // Waji
14 > 13 ? console.log("Wahaj") : console.log("Waji"); // Wahaj

// the same thing as if / else
if (14 > 13) {
  console.log("Wahaj");
} else {
  console.log("Waji");
} // Wahaj

// --- nested ternary operator ---
// one ternary inside another, useful when there are multiple possible results

let userName = "Wahaj";
let result =
  userName === "Wahaj" ? "Waji"
  : userName === "Ahmed" ? "Wahab"
  : "Wajahat";
console.log(result); // Waji

// a wrong name fails both checks and lands on the last answer
let wrongName = "Ali";
let wrongResult =
  wrongName === "Wahaj" ? "Waji"
  : wrongName === "Ahmed" ? "Wahab"
  : "Wajahat";
console.log(wrongResult); // Wajahat

// --- switch / case / break / default ---
// break: if the value matches, return the answer and stop (without it, it returns all the answers)
// case: gives a condition where the value gets compared
// default: runs if nothing comes true

let day1 = 1;
switch (day1) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  default:
    console.log("Invalid");
} // monday

// --- switch: one answer for multiple conditions ---
// if the first condition becomes true, it returns the value and doesn't go
// on to the second condition, just like if / else

let day2 = 1;
switch (day2) {
  case 1:
  case 2:
  case 3:
    console.log("monday");
    break;
  // other code
} // monday

// --- switch with decimal values ---
// a switch can handle decimal points, but it makes a mess in some conditions

let number1 = 2.5;
switch (number1) {
  case 2.5:
    console.log(number1);
    break;
  default:
    console.log("Wrong");
} // 2.5

// 0.1 + 0.2 doesn't match case 0.3, so default runs
// (computers store values in binary, and values like 0.1 and 0.2 cause trouble there)
let number2 = 0.1 + 0.2;
switch (number2) {
  case 0.3:
    console.log(number2);
    break;
  default:
    console.log("Wrong");
} // Wrong