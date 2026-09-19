# 00 — JS Foundations

Basics of `var` vs `let`, and how JS handles numbers vs strings when you add them together.

### Why can I use `a` before declaring it with `var`, but not with `let`?

```js
var a = 12;
console.log(a);
// Output: 12

let a = 12;
console.log(a);
// Output: 12
```

Both work fine when you declare and assign on the same line. The difference shows up when you try to *use* the variable before its declaration line:

```js
a = 12;
console.log(a);
var a;
// Output: 12
```

```js
a = 12;
console.log(a);
let a;
// Output: ReferenceError: Cannot access 'a' before initialization
```

It's because `var` gets hoisted with an initial value of `undefined`, so assigning to it before the `var a;` line still works — JS already knows `a` exists. `let` is hoisted too, but it stays in the "temporal dead zone" until the actual `let a;` line runs, so touching it before that throws an error.

Best practice: use `let`.

### How do I add two numbers?

```js
let a = 10;
let b = 12;
console.log(a + b);
// Output: 22
```

Straightforward — both are numbers, so `+` just adds them.

### What's the difference between a number and a string that looks the same?

`10` is a Number. `"10"` is a String. They behave differently with `+`:

```js
10 + 1;
// Output: 11 (Number + Number = addition)

"10" + 1;
// Output: "101" (String + Number = concatenation)
```

Even though `"10"` *looks* like a number, it's a string — so `+` glues the characters together instead of doing math.

### What happens when I mix a number and a string in one variable?

```js
let a = 12;
let b = "13";
console.log(a + b);
console.log(typeof (a + b));
// Output: "1213"
// Output: "string"
```

This is called **concatenation** — once one side of `+` is a string, JS converts the whole thing to a string instead of adding it as a number. `typeof` confirms the result's type is `"string"`, not `"number"`.

### Why does JS treat `+` as concatenation once a string shows up in the expression?

```js
let a = 10;
let b = 12;
console.log("Sum of 10 and 12" + 10 + 12);
// Output: "Sum of 10 and 121012"
```

JS reads left to right: it hits the string first, so `"Sum of 10 and 12" + 10` immediately becomes a string (`"Sum of 10 and 1210"`), and then `+ 12` appends `"12"` to that string too. Nothing after the first string ever gets treated as math again — once you're in string mode, you stay in string mode for the rest of that expression.

### Do parentheses change that?

```js
let a = 10;
let b = 12;
console.log("Sum of 10 and 12" + (10 + 12));
// Output: "Sum of 10 and 1222"
```

Yes — parentheses are evaluated first, like in math. So `(10 + 12)` becomes `22` *before* it ever touches the string, and only then gets appended as `"22"`. That's different from the version without parentheses, where the numbers get glued on one at a time instead of added first.

### Does the order of numbers vs. strings matter?

```js
console.log(10 + 12 + "Sum of 10 and 12");
// Output: "22Sum of 10 and 12"
```

Yes. JS solves this step by step, left to right. It hits `10 + 12` first — at that point there's no string involved yet, so it's a normal addition and gives `22`. Only *after* that does it reach the string, so the final `+` appends `"Sum of 10 and 12"` onto `22`, turning the whole thing into a string. So where the string sits in the expression decides how much of it gets added as numbers first.

### Why does `"1" - 1` work like math but `"1" + 1` doesn't?

```js
console.log("1" + 1);
// Output: "11"

console.log("1" - 1);
// Output: 0
```

`+` has two jobs — it can mean addition or string concatenation — so when JS isn't sure, it plays it safe and treats it as concatenation if either side is a string. `-` only ever means subtraction, so JS always converts the string to a number first and does the math instead. This is called **type coercion**, and it works the same way for `*` and `/`.

### How do I get a value from the user?

Accepting a value means taking input from the user. I use `prompt()` for that — it's a built-in JavaScript function.

```js
let age = prompt("What is your age?");
```

This pops up an alert-style box where the user can type in their age. The other way is just giving the value myself instead of asking for it, e.g. `let age = 10;`.

### What's wrong with `prompt()`, and how do I fix it?

`prompt()` always converts whatever the user types into a string — even if they type digits. If I want it as an actual number, I wrap it in `Number()`:

```js
let age = Number(prompt("What is your age?"));
// age comes back as a number now, not a string
```

Or the same thing in two steps:

```js
let age = prompt("What is your age?");
age = Number(age);
```

### What's type casting?

`Number()` is a function that converts a value — usually a string — into a number, if it's actually able to be converted. Converting a value from one data type to another like this is called **type casting**.

### How do I swap the values of two variables?

Say I have:

```js
let a = 10;
let b = 20;
```

and I want `a` to end up `20` and `b` to end up `10`, without building a whole new variable/collection to hold them. That's swapping. Two ways I know:

**Method 1 — using a third variable**

```js
let a = 10;
let b = 20;
let c = a;
a = b;
b = c;
// Output: a = 20, b = 10
```

First I copy `a`'s value into `c` so it isn't lost. Then I overwrite `a` with `b`. Then I overwrite `b` with the `c` I saved earlier (`a`'s original value).

**Method 2 — using arithmetic, no third variable**

```js
let a = 10;
let b = 20;
a = a + b; // a becomes 10 + 20 = 30
b = a - b; // b becomes 30 - 20 = 10
a = a - b; // a becomes 30 - 10 = 20
// Output: a = 20, b = 10
```

### Is there a shorter way to swap without a third variable?

Yes — array destructuring. I make the two values into an array and reassign them back in the opposite order, in one line:

```js
let a = 10;
let b = 20;
[a, b] = [b, a];
// Output: a = 20, b = 10
```

This is called **destructuring assignment**: pull values out of an array (or object) by matching positions/keys, instead of grabbing them one at a time. Using it for a swap is just the assignment pattern above — `[a, b] = [b, a]` means "the new `a` is the old `b`, and the new `b` is the old `a`," all evaluated at once so nothing gets overwritten before it's used.

### What are the arithmetic operators?

Addition, subtraction, multiplication, division, and modulo (`%`). Addition/subtraction/multiplication work the way I'd expect. Division and modulo need their own notes below.

### Division gives me a decimal — how do I get just the whole number part?

```js
let a = 12;
let b = 22;
console.log(a / b);
// Output: 0.5454545454545454
```

Division doesn't stop at the decimal point on its own — I get the full decimal answer. If I only want the whole number before the point, I use `Math.floor()`, which removes everything after the decimal point:

```js
console.log(Math.floor(a / b));
// Output: 0
```

`Math.floor` is a function from JS's built-in `Math` library. I only reach for it when I specifically need the whole-number part and nothing after the point.

### What does `%` (modulo) actually give me?

Regular division (`/`) gives the **quotient** — how many whole times one number fits into another. Modulo (`%`) gives the **remainder** — what's left over after that division.

```js
let a = 7;
let b = 2;
console.log(a % b);
// Output: 1
// 7 divided by 2 fits 3 whole times (quotient 3), with 1 left over — modulo gives me that 1

console.log(b % a);
// Output: 2
// 2 divided by 7 fits 0 whole times, so the whole thing is left over — modulo gives 2
```

So: division gives the quotient, modulo gives the reminder.

### What are relational operators?

They compare two values and give back `true` or `false`.

| Operator | Name | True when... | Example | Result |
|---|---|---|---|---|
| `<` | Less than | left value is smaller than the right | `5 < 10` | `true` |
| `>` | Greater than | left value is larger than the right | `10 > 5` | `true` |
| `>=` | Greater than or equal to | left value is larger than or equal to the right | `10 >= 5` | `true` |
| `==` | Loose equality | values are equal, ignoring type | `5 == "5"` | `true` |
| `===` | Strict equality | both value and type are equal | `5 === "5"` | `false` |
| `!=` | Loose inequality | values are different, ignoring type | `5 != "5"` | `true` |
| `!==` | Strict inequality | value or type is different | `"5" !== "5"` | `false` |

> Note to self / left for Wahaj to confirm: my notes have a `<=` row labelled "Greater than or equal to" but described as "true if the left value is smaller than or equal to the right," with the example `10 <= 10 → true`. That description matches **Less than or equal to**, not "Greater than or equal to" — looks like a mislabel in the notebook. Left out of the table above until you confirm which it should say.

### What are logical operators?

They combine multiple `true`/`false` comparisons into one result.

- `&&` (AND) — checks every statement and returns `true` only if **all** of them are true.
- `||` (OR) — checks every statement and returns `true` if **at least one** of them is true.

```js
console.log(10 > 6 || 8 < 9);
// Output: true — 10 > 6 is true, so OR already has what it needs
```

It doesn't matter how many statements I chain — `&&` and `||` just keep following their own rule across all of them.

> Note to self / left for Wahaj to confirm: my notes show `(10 > 6 && 8 > 9)` with `Output: true`, but `8 > 9` is false, so a true `&&` (AND) should give `false` here. Left this example out of `practice.js` until you confirm what the notes meant to show.

### What are unary operators (increment/decrement)?

`++` adds 1, `--` subtracts 1 — but *when* that happens depends on whether it comes before or after the variable.

**Post-increment (`a++`)** — use the current value first, *then* increment:

```js
let a = 10;
let b = a++;
console.log(a); // 11
console.log(b); // 10
```

**Pre-increment (`++a`)** — increment first, *then* use the new value:

```js
let a = 10;
let b = ++a;
console.log(a); // 11
console.log(b); // 11
```

In short: post says "use the value, then increment." Pre says "increment the value, then use it."

`--` (decrement) follows the exact same idea — post-decrement uses the value then subtracts 1, pre-decrement subtracts 1 then uses the value.

## Problems solved

- [Number vs. string addition](./practice.js)
- [Type coercion with `+` vs `-`](./practice.js)
- [Accepting and casting user input](./practice.js)
- [Swapping two variables](./practice.js)
- [Swapping with array destructuring](./practice.js)
- [Division vs. modulo, and `Math.floor`](./practice.js)
- [Relational operators](./practice.js)
- [Logical operators](./practice.js)
- [Increment/decrement: post vs. pre](./practice.js)