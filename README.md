# All About JavaScript    
---
# ⚠️ DISCLAIMER: Intermediate Level Content Ahead
# If you're new to JavaScript, this might feel like drinking from a firehose! 🔥
---

## 🚀 Variables: Your Data Containers

A **variable** is like a labeled box where you store data to use later in your code.

```javascript
let score = 10; // 'score' is a variable storing the value 10
```

---

## 🛠️ Operators: JavaScript’s Action Symbols

Operators let you perform actions on data:

- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)
- `%` (Modulus — remainder after division)
- `=` (Assignment)
- `==` (Abstract equality operator or Loose equality operator)
- `===` (Strict equality operator)

**Example:**
```javascript
let sum = 5 + 2; // sum is now 7
```

---

## 🏷️ Declaring Variables: `var`, `let`, & `const`

| Keyword   | Scope         | Hoisting         | Re-declaration | Mutability | When to Use             |
|-----------|--------------|------------------|----------------|------------|-------------------------|
| `var`     | Function     | Yes (undefined)  | Allowed        | Yes        | Old code (avoid now)    |
| `let`     | Block        | Yes (TDZ error)  | Not allowed    | Yes        | Most variables          |
| `const`   | Block        | Yes (TDZ error)  | Not allowed    | No         | Constants / references  |

**TDZ = Temporal Dead Zone:**  
Trying to use a `let` or `const` variable before declaring it causes an error.

---

## 🌟 Examples — How Variables Work

### 1. Basic Usage

```javascript
var a = 12;
let b = 13;
const c = 14;
console.log(a, b, c); // 12 13 14
```
This JavaScript code demonstrates three different ways to declare variables:

- var - Function-scoped variable (older method)

- let - Block-scoped variable (modern, recommended)

- const - Block-scoped constant (cannot be reassigned)

### 2. Scope Demonstration

```javascript
{
  var x = 1;
  let y = 2;
  const z = 3;
}
console.log(x); // 1 (var escapes the block!)
console.log(y); // Error: y is not defined
console.log(z); // Error: z is not defined
```
- We have a block:
{
var x = 1;
let y = 2;
const z = 3;
}

After the block, we try to log x, y, and z.

- For x:

Since var is not block-scoped, the variable x is accessible outside the block.

So, console.log(x) will output 1.

- For y:

y is declared with let inside the block, so it is block-scoped and not accessible outside.

Trying to access y outside the block will throw a ReferenceError: y is not defined.

- For z:

z is declared with const inside the block, so it is also block-scoped and not accessible outside.

Trying to access z outside the block will throw a ReferenceError: z is not defined.

### 3. Hoisting Behavior

```javascript
console.log(a); // undefined
var a = 10;

console.log(b); // Error!
let b = 20;

console.log(c); // Error!
const c = 30;
```
- For var a = 10;:

The declaration (var a) is hoisted to the top of the scope (global scope here) and initialized with undefined.

The assignment (a = 10) remains in place.

So, when we try to console.log(a) before the assignment, we get undefined.

- For let b = 20; and const c = 30;:

The declarations (let b and const c) are hoisted but NOT initialized (this is often called the "temporal dead zone").

Accessing them before the declaration line will throw a ReferenceError.

Let's break down the code step by step as the JavaScript engine would:

Phase 1: Hoisting and Memory Allocation

var a is hoisted and set to undefined.

let b and const c are hoisted but not initialized (so they are in the temporal dead zone until their declaration lines).

- Phase 2: Execution

console.log(a) -> at this point, a is undefined.

Then we assign a = 10.

console.log(b) -> at this point, b is in the temporal dead zone, so accessing it throws a ReferenceError.

Similarly, console.log(c) would also throw a ReferenceError.

However, note that the error at console.log(b) will stop the execution, so console.log(c) won't be reached.

Let's write the code in a way that we can see the behavior without stopping at the first error.

### 4. Re-declaration Rules

```javascript
var foo = 1;
var foo = 2; // Okay

let bar = 1;
let bar = 2; // Error!

const baz = 1;
const baz = 2; // Error!
```
- var allows redeclaration - You can declare the same variable multiple times without errors, which can cause bugs

- let prevents redeclaration - Throws an error if you try to declare the same variable again in the same scope

- const prevents both redeclaration and reassignment - Most strict, cannot redeclare or change the value after initialization

Conclusion: Modern JavaScript favors let and const over var because they provide better error prevention and make code more predictable and maintainable.

### 5. Mutability

```javascript
let score = 100;
score = 200; // Allowed

const PI = 3.14159;
PI = 3.15; // Error!

const arr = [1, 2, 3];
arr.push(4); // Allowed! (Array contents can change)
```

### 6. Undefined vs. Not Defined

```javascript
console.log(x); // Error: x is not defined

var y;
console.log(y); // undefined
```

---

## 🧑‍💻 Data Types & Type Checking

### Adding Numbers

```javascript
let a = 10;
let b = 10;
console.log(a + b); // 20
```

### Adding Number + String (Concatenation)

```javascript
let a = 10;
let b = "10";
console.log(a + b); // "1010"
console.log(typeof(a + b)); // "string"
```
- When you use `+` with a number and a string, JavaScript converts the number to a string and joins them together.

### Concatenation in Expressions

```javascript
let a = 10;
let b = 10;
console.log("sum of 10 and 10 is" + a + b);
// Output: "sum of 10 and 10 is1010"
```
- JavaScript evaluates left to right: once a string is involved, following `+` operations also do string concatenation.

---

## 🆚 Why Use `let` & `const` (Not `var`)?

- **Block Scope:** Variables declared with `let` and `const` stay within `{}` blocks, making behavior more predictable.
- **No Hoisting Surprises:** Using a variable before its declaration with `let` or `const` throws an error, helping catch bugs.
- **No Accidental Re-declaration:** `let` and `const` prevent you from redeclaring the same variable, avoiding mistakes.
- **Mutability:**  
  - Use `const` for values that should never change (e.g. `PI`, configuration).
  - Use `let` for values that can change (e.g. counters, user inputs).

**Best Practice:**  
✨ Always use `const` by default. Use `let` if the value will change. Avoid `var` in modern JavaScript.

---

## ⚡ Quick Reference

- Use `const` for constants and references (arrays, objects).
- Use `let` for variables that may change.
- Avoid `var` in modern code.

---

## 🔄 Swapping Two Numbers — 3 Ways

### 1. With a Temporary Variable

```javascript
let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;
```

### 2. With Math (No Extra Variable)

```javascript
let a = 10;
let b = 20;
a = a + b; // 30
b = a - b; // 10
a = a - b; // 20
```

### 3. With Array Destructuring (Modern & Simple)

```javascript
let a = 10;
let b = 20;
[a, b] = [b, a];
```

---

## ➗ Operators in Action

### Division `/`

```javascript
let a = 12;
let b = 22;
console.log(a / b); // 0.545454...
```

- `/` divides two numbers and returns a decimal.

**To get only the integer part, use `Math.floor()`:**

```javascript
console.log(Math.floor(a / b)); // 0
```

### Modulus `%` (Remainder)

```javascript
let a = 7;
let b = 2;
console.log(a % b); // 1
```

- `%` gives the **remainder** after division.

#### Visualizing Division

```
           _____3____   -----------> Quotient
      __2_|   7
                6
            ___________
                 1          -------------> Remainder
```

---

## 🎯 Coding Cheat Sheet

- **Quotient (integer part):**  
  Use `/` with `Math.floor()`
- **Remainder:**  
  Use `%`

```javascript
let a = 7;
let b = 2;
console.log(a % b); // 1
console.log(Math.floor(a / b)); // 3
```

---

## 🔍 Extracting Digits with Modulus

Want the *last digit* of a number?

```javascript
let a = 4563;
console.log(a % 10); // 3
```

Want the *last two digits*?

```javascript
let a = 4563;
console.log(a % 100); // 63
```

Want the *last three digits*?

```javascript
let a = 4563;
console.log(a % 1000); // 563
```

---

## 👨‍💻 Relational Operators

Relational operators compare two values and allow you to perform conditional logic:

- `<`  (Less than)
- `>`  (Greater than)
- `<=` (Less than or equal to)
- `>=` (Greater than or equal to)
- `!=` (Not equal to)
- `=`  (Assignment, not comparison)
- `==` (Equal to, compares values but not type)
- `===` (Strict equal to, compares both value and type)

### Examples

#### `>` Greater than

```javascript
console.log(10 > 15); // Output: false
// 10 is not greater than 15
```

#### `<` Less than

```javascript
console.log(10 < 5); // Output: false
// 10 is not less than 5
```

#### `>=` Greater than or equal to

```javascript
console.log(10 >= 10); // Output: true
// True because 10 is equal to 10
```

```javascript
console.log(10 >= 7); // Output: true
// 10 is greater than 7
```

#### `<=` Less than or equal to

```javascript
console.log(10 <= 7); // Output: false
// 10 is not less than or equal to 7
```

#### `!=` Not equal

```javascript
console.log(10 != 10); // Output: false
// 10 is equal to 10, so 'not equal' returns false
```

#### `=` Assignment Operator

```javascript
let a = 10; // '=' assigns the value 10 to a
```
 
- 
#### `==` Loose Equality

```javascript
console.log(10 == '10'); // Output: true
// Checks only value, not type
```
- `==` 10 is the.

#### `===` Strict Equality

```javascript
console.log(10 === '10'); // Output: false
// Checks both value and type
```
- `===` 10 is value and ' ' is type.
---

## 📝 Summary

- Use `let` and `const` for all modern JavaScript variables.
- Choose `const` by default, use `let` if you need to change the value.
- `/` is for division (use `Math.floor()` to get integer results).
- `%` is for remainders and extracting digits from numbers.
- Relational operators: `<`, `>`, `<=`, `>=`, `!=`, `=`, `==`, `===` let you compare values and types.
- `=` is the assignment operator (sets a value).
- `==` checks for equality of value only.
- `===` checks for equality of both value and type.
- Variables act as containers, operators as tools — use them wisely!
