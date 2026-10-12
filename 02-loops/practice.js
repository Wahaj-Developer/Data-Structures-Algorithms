// --- what is a loop? ---
// a loop repeats a task multiple times without writing the same code again and again

// without a loop
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

// with a loop
// for (start, end, change)
for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}
// Output: Hello (5 times)

// --- parts of a for loop ---
// for (let i = 1; i <= 5; i++) { ... }
// let i = 1  -> create i and start from 1
// i <= 5     -> condition, when to stop
// i++        -> increase i by 1 after each loop
// { ... }    -> what to do after completing 1 loop
// i = 1 can be changed as needed, e.g. i = 11 starts from 11

// --- print the values from 1 to 22 ---
for (let i = 1; i < 23; i++) {
  console.log(i);
}
// Output: 1 2 3 ... 22

// --- print the values going down ---
// i-- subtracts 1 each loop, runs while i is greater than 1
for (let i = 23; i > 1; i--) {
  console.log(i);
}
// Output: 23 22 21 ... 2

// --- infinite loop (do not run this) ---
// with i++ instead of i-- the condition i > 1 never becomes false,
// so it keeps printing 23, 24, 25, 26, 27... and hangs the browser
// for (let i = 23; i > 1; i++) {
//   console.log(i);
// }