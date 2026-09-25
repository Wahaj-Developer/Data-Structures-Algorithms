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

### What happens when I mix `i++` and `++i` in the same expression?

```js
let i = 11;
let j = i++ + ++i;
console.log(j);
// Output: 24
```

Left to right: `i++` uses the current value first (`11`) and then bumps `i` to `12`. Then `++i` bumps `i` again first (to `13`) and returns that. So the sum is `11 + 13 = 24`.

```js
let a = 11;
let b = 12;
let c = a++ + ++b;
console.log(a); // 12
console.log(b); // 13
console.log(c); // 24
```

Same idea with two different variables: `a++` gives `11` then `a` becomes `12`. `++b` bumps `b` to `13` first and gives that. `11 + 13 = 24`.

```js
let a = 11;
let b = 12;
let c = a + b + a++ + b++ + ++a + ++b;
console.log(a); // 13
console.log(b); // 14
console.log(c); // 73
```

Longer chain, same rule applied term by term, left to right:
- `a` → `11` (plain read, nothing changes yet)
- `b` → `12` (plain read)
- `a++` → `11`, then `a` becomes `12`
- `b++` → `12`, then `b` becomes `13`
- `++a` → `a` becomes `13`, returns `13`
- `++b` → `b` becomes `14`, returns `14`

`11 + 12 + 11 + 12 + 13 + 14 = 73`, and by the end `a = 13`, `b = 14`.

> Note to self / left for Wahaj to confirm: two problems from this page (labeled `Q:2` and a second `Q:5`) trail off in the notebook without a final `console.log` line or written output, so I couldn't reconstruct what they were checking. Skipped both here — let me know if you want them filled in.

### Can I increment a boolean?

```js
let a = true;
++a;
console.log(a);
// Output: 2
```

Yes — JS coerces `true` to `1` and `false` to `0` before doing math on it, so `++true` becomes `1 + 1 = 2`.

### Why does `++11` throw an error?

```js
++11;
// Output: SyntaxError: Invalid left-hand side expression in prefix operation
```

Because `++` and `--` need something they can actually update — a variable — not a raw literal value. `11` isn't a reference to anywhere in memory, so there's nothing for `++` to increment.

### Why does `--(a++)` also throw an error?

```js
let a = 10;
let j = --(a++);
// Output: SyntaxError: Invalid left-hand side expression in prefix operation
```

Same root cause as `++11`. `(a++)` hands back a plain value, not a reference to `a` itself — so once that's wrapped in parentheses, applying `--` to it is like applying `--` directly to a number. `++`/`--` only work directly on a variable, never on the result of another expression.

### Math.round() vs Math.ceil() vs Math.floor() vs Math.trunc()

```js
console.log(Math.ceil(10.1));
// Output: 11
```

`Math.ceil()` always rounds **up** to the next whole number, no matter how small the decimal part is.

```js
console.log(Math.floor(10.9));
// Output: 10
```

`Math.floor()` always rounds **down**, no matter how big the decimal part is.

```js
console.log(Math.trunc(18.98));
// Output: 18
```

`Math.trunc()` just chops off everything after the decimal point — it's not "rounding" in either direction, it's removal. For a positive number like this it lands on the same result as `Math.floor()`, but they work differently once negative numbers are involved.

> Note to self / left for Wahaj to confirm: my notes have `Math.round(10.6)` with the output written as `10`, but a separate rule right after it says "0.5 or higher rounds up, below .5 rounds down" — which would make `Math.round(10.6)` equal `11`, not `10`. Looks like a slip in the notebook (maybe the number was meant to be `10.4`). Left `Math.round()` out of `practice.js` until you confirm which one's right.

### Math.pow(), Math.sqrt(), Math.cbrt()

```js
console.log(Math.pow(2, 5));
// Output: 32
```

`Math.pow(base, exponent)` multiplies the base by itself `exponent` times: `2 × 2 × 2 × 2 × 2 = 32`.

```js
console.log(Math.sqrt(16));
// Output: 4
```

`Math.sqrt()` gives the number that, multiplied by itself, produces the input: `4 × 4 = 16`.

```js
console.log(Math.cbrt(8));
// Output: 2
```

`Math.cbrt()` is the same idea but for cubes: the number that, multiplied by itself 3 times, produces the input: `2 × 2 × 2 = 8`.

### Math.abs(), Math.min(), Math.max()

```js
console.log(Math.abs(-10));
// Output: 10
```

`Math.abs()` strips the negative sign and gives the positive version of a number.

```js
console.log(Math.min(1, 2, 3, 4, 5));
// Output: 1

console.log(Math.max(1, 2, 3, 4, 5));
// Output: 5
```

`Math.min()` / `Math.max()` scan a whole set of numbers and return the smallest / largest one.

### Math.random() and .toFixed()

```js
console.log(Math.random());
// Output: something like 0.3821... — always a decimal between 0 and 1, never reaching 1
```

`Math.random()` generates a random decimal below `1`. Multiplying it (e.g. `Math.random() * 9000`) scales that range up — so `Math.random() * 9000` gives a random number somewhere under `9000`.

> Note to self / left for Wahaj to confirm: the `.toFixed()` example in my notes (`12.34567` → `.toFixed(2)`) has an output written that doesn't parse (`12.84`, when `.toFixed(2)` on that number should actually give `"12.35"`). I know the concept — it controls how many digits show after the decimal point — but left the example out of `practice.js` until the real output's confirmed.

### Problem: generate a random 4-digit OTP

**Method 1 — inline:**

```js
console.log(Math.trunc(Math.random() * 9000 + 1000));
```

**Method 2 — stored in a variable:**

```js
let otp = Math.trunc(Math.random() * 9000 + 1000);
console.log(otp);
```

`Math.random() * 9000` gives a random decimal somewhere between `0` and `9000`. Adding `1000` shifts that whole range up to between `1000` and `9999` — a proper 4-digit number. `Math.trunc()` chops off the decimal part so it's a clean integer, not something like `4821.7362`.

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
- [Combining `i++` and `++i` in one expression](./practice.js)
- [Incrementing a boolean](./practice.js)
- [Why `++11` and `--(a++)` throw errors](./practice.js)
- [Math.ceil, Math.floor, Math.trunc](./practice.js)
- [Math.pow, Math.sqrt, Math.cbrt](./practice.js)
- [Math.abs, Math.min, Math.max](./practice.js)
- [Math.random and scaling a random range](./practice.js)
- [Generating a random 4-digit OTP](./practice.js)