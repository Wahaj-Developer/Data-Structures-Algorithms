# 01 — Conditions

`if`, `else if` and `else` statements, checking for `NaN` with `isNaN()`, a shop bill discount problem (still in progress), the ternary operator (including nested), and `switch` with `case`, `break` and `default`.

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

### What is the ternary operator?

If I use both `?` and `:` in the code, that is called the ternary operator.

```js
12 > 13 ? console.log("Wahaj") : console.log("Waji");
// Output: Waji

14 > 13 ? console.log("Wahaj") : console.log("Waji");
// Output: Wahaj
```

In a ternary operator I first write the condition, then what to do if the condition is true, then what to do if it is false:

```
condition ? answer if true : answer if false
```

### How does a ternary look as an if/else?

It works like an if/else statement. This is the `14 > 13` example from above written as if/else:

```js
if (14 > 13) {
  console.log("Wahaj");
} else {
  console.log("Waji");
}
// Output: Wahaj
```

### What is a nested ternary operator?

A nested ternary operator means putting one ternary operator inside another ternary operator. It is useful when I have multiple conditions, possibilities or results.

```js
let name = "Wahaj";
let result =
  name === "Wahaj" ? "Waji"
  : name === "Ahmed" ? "Wahab"
  : "Wajahat";
console.log(result);
// Output: Waji
```

How I picture it:

```
name === "Wahaj"?
  Yes -> "Waji"
  No  -> name === "Ahmed"?
           Yes -> "Wahab"
           No  -> "Wajahat"
```

If I put in a wrong name like `"Ali"`, it returns `"Wajahat"`, because both checks fail and it lands on the last answer.

### How does switch / case work?

`switch`, `case` and `break` are also used to handle or compare multiple statements.

```js
let day = 1;
switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  default:
    console.log("Invalid");
}
// Output: monday
```

### Why `break`?

`break` is used to tell it that if the value matches, return the answer and stop. If I remove `break`, it returns all the answers instead of just the matching one.

### Why `case`?

`case` is used to give a condition where the value gets compared.

### Why `default`?

`default` is used when nothing comes true. If no `case` matches, `default` runs.

### What if I want one answer for multiple conditions?

I can stack the cases on top of each other and give them one shared answer:

```js
let day = 1;
switch (day) {
  case 1:
  case 2:
  case 3:
    console.log("monday");
    break;
  // other code
}
// Output: monday
```

Also, if the first condition becomes true, it returns the value and doesn't go on to the second condition, just like if/else.

### Can switch handle decimal numbers?

A switch can handle decimal points, but it makes a mess in some conditions. This one works:

```js
let number = 2.5;
switch (number) {
  case 2.5:
    console.log(number);
    break;
  default:
    console.log("Wrong");
}
// Output: 2.5
```

This one doesn't:

```js
let number = 0.1 + 0.2;
switch (number) {
  case 0.3:
    console.log(number);
    break;
  default:
    console.log("Wrong");
}
// Output: Wrong
```

`0.1 + 0.2` never matches `case 0.3`, so it falls to `default`. The problem is that computers use binary numbers, 0 and 1, to store values, and values such as 0.1 and 0.2 are where that causes trouble.

### Why does 0.1 + 0.2 not give 0.3?

```js
console.log(0.1 + 0.2);
// Output: 0.30000000000000004
```

Decimal values like 0.1 and 0.2 can't be stored exactly in binary numbers, so JS stores them approximately. When I add them, the answer doesn't come out as `0.3`, it comes out as `0.3000000...` something.

This doesn't only affect `switch`. It also happens in an if/else statement and everywhere else:

```js
let sum = 0.1 + 0.2;
if (sum === 0.3) {
  console.log("Equal");
} else {
  console.log("Not equal");
}
// Output: Not equal
```

If for some reason I want the exact value, I use a Math library function.

### When do I use if/else, switch and ternary?

```
if/else  -> complex condition
switch   -> one value -> many exact choices
ternary  -> simple condition + two results
```

## Problems solved

- [Valid voter with if/else](./practice.js)
- [Checking for NaN with isNaN()](./practice.js)
- [Shop bill discount, first method (in progress)](./practice.js)
- [Ternary operator and its if/else equivalent](./practice.js)
- [Nested ternary operator](./practice.js)
- [Switch with case, break and default](./practice.js)
- [Switch with multiple cases sharing one answer](./practice.js)
- [Switch with decimal values](./practice.js)
- [0.1 + 0.2 and the floating point problem](./practice.js)