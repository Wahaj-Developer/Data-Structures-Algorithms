# 01 — Conditions

`if`, `else if` and `else` statements, checking for `NaN` with `isNaN()`, and a shop bill discount problem (still in progress).

### How does an if/else statement work?

Problem: check whether a voter is valid.

```js
let age = 20;
if (age >= 18) {
  console.log("The voter is valid");
} else {
  console.log("The voter is not valid");
}
// Output: The voter is valid
```

`age` is `20`, and `20 >= 18` is true, so the first block runs. If it was under 18, the `else` block would run instead.

### What does it look like when I have more conditions?

```js
if (condition) {
  // statement 1
} else if (condition) {
  // statement 2
} else if (condition) {
  // statement 3
} else {
  // statement 4
}
```

The more conditions I want, the more `else if` I add. The chain always starts with `if` and ends with `else`.

### How do I check if a value is `NaN`?

I use the `isNaN()` function. It helps me check whether a value is `NaN` or not, and if it is, the statement runs.

```js
let a = Number(prompt("What is your age?"));
if (isNaN(a)) {
  // statement
}
```

### Why can't I use `NaN === NaN`?

```js
console.log(NaN === NaN);
// Output: false

console.log(isNaN(NaN));
// Output: true
```

Because it gives `false`. The way to check for `NaN` is the `isNaN()` function.

### Problem: shop bill discount

The discount depends on how big the bill is:

| Amount | Discount |
|---|---|
| 0 - 5000 | 0% |
| 5001 - 7000 | 5% |
| 7001 - 8000 | 10% |
| 8000 - 9000 | 15% |
| More than 9000 | 20% |

**First method (in progress):**

```js
let bill = Number(prompt("What is the bill?"));
if (bill > 9000) {
  let discount = bill * 20 / 100;
  let finalBill = Math.floor(bill - discount);
}
```

For a bill above 9000, the discount is 20% of the bill, and the final bill is the bill minus that discount. I use `Math.floor()` so the final bill is a whole number. The other ranges from the table aren't written yet.

## Problems solved

- [Valid voter with if/else](./practice.js)
- [Checking for NaN with isNaN()](./practice.js)
- [Shop bill discount, first method (in progress)](./practice.js)