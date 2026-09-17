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

## Problems solved

- [Number vs. string addition](./practice.js)