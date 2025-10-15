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
- let allows reassignment - Variables declared with let can be assigned new values after declaration

- const prevents reassignment of the variable itself - Cannot assign a completely new value to a const variable

- const allows mutation of object contents - For arrays and objects, the contents can be modified even though the variable binding is constant

Conclusion: const makes the variable binding immutable, not the data it points to - use const for values that shouldn't be reassigned, and let when you need to change the variable's value entirely.

### 6. Undefined vs. Not Defined

```javascript
console.log(x); // Error: x is not defined

var y;
console.log(y); // undefined
```
- "Error" means complete failure - The variable was never declared anywhere in the code, so JavaScript cannot find it and throws a ReferenceError

- "undefined" means variable exists but has no value - The variable was properly declared but hasn't been assigned any value yet

- Different causes and behaviors - Errors stop execution, while undefined allows code to continue running

Conclusion: "Error" means the variable doesn't exist at all (never declared), while "undefined" means the variable exists but has no value assigned yet - they represent completely different states in JavaScript execution.


---

## 🧑‍💻 Data Types & Type Checking

### Adding Numbers

```javascript
let a = 10;
let b = 10;
console.log(a + b); // 20
```
- Variable Declaration - let a = 10 and let b = 10 declare two separate variables and assign them numeric values

- Mathematical Operation - a + b performs addition using the values stored in both variables (10 + 10)

- Output Result - console.log() displays the computed result of 20 in the console

Conclusion: This demonstrates basic variable assignment and arithmetic operations in JavaScript, where declared variables store values that can be used in mathematical expressions to produce expected results.

### Adding Number + String (Concatenation)

```javascript
let a = 10;
let b = "10";
console.log(a + b); // "1010"
console.log(typeof(a + b)); // "string"
```
- Different Data Types - a is a number (10) while b is a string ("10") - they have different types despite similar appearance

- String Concatenation with + - When using + operator with mixed types, JavaScript converts the number to string and concatenates them

- Type Coercion Result - The operation 10 + "10" becomes "10" + "10" resulting in string "1010" instead of mathematical sum

Conclusion: The + operator behaves differently based on data types - it performs addition with numbers but concatenation when strings are involved, demonstrating JavaScript's type coercion where values are automatically converted to compatible types during operations.

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
- Store original value - temp = a saves the initial value of a (10) in a temporary variable before it gets overwritten

- Swap first variable - a = b assigns the value of b (20) to a, so now a becomes 20

- Swap second variable - b = temp assigns the saved original value of a (10) to b, completing the swap

Conclusion: This is a classic variable swapping technique using a temporary variable to safely exchange values between two variables without losing any data in the process.

### 2. With Math (No Extra Variable)

```javascript
let a = 10;
let b = 20;
a = a + b; // 30
b = a - b; // 10
a = a - b; // 20
```
- Combine values - a = a + b stores the sum of both variables (30) in a, creating a temporary total

- Extract original 'a' - b = a - b subtracts current b (20) from the total (30) to get original a value (10) and assigns it to b

- Extract original 'b' - a = a - b subtracts the new b (10) from the total (30) to get original b value (20) and assigns it to a

Conclusion: This is a mathematical swapping technique that exchanges variable values without using a temporary variable by leveraging arithmetic operations to preserve and extract the original values.

### 3. With Array Destructuring (Modern & Simple)

```javascript
let a = 10;
let b = 20;
[a, b] = [b, a];
```
- Array Destructuring - [b, a] creates a temporary array with the swapped values [20, 10]

- Simultaneous Assignment - [a, b] = assigns the array values to variables in one operation

- Parallel Execution - Both assignments happen at the same time, avoiding the need for temporary storage

Conclusion: This is the modern ES6 destructuring assignment syntax that provides the cleanest and most readable way to swap variables in JavaScript without intermediate steps or mathematical operations.

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

- Regular Division - / operator performs exact mathematical division and returns a decimal result (0.545454...)

- Math.floor() Function - Rounds down to the nearest integer, removing the decimal part completely

- Integer Result - Math.floor(a / b) gives only the whole number portion (0), discarding any fractional value

Conclusion: Use regular division / when you need precise decimal results, but combine it with Math.floor() when you only want the integer quotient without any fractional component.
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

- Division Remainder - The % operator divides two numbers and returns what's left over after the division

- 7 ÷ 2 Example - 7 divided by 2 equals 3 with 1 left over (2 × 3 = 6, 7 - 6 = 1)

- Use Cases - Commonly used to check if numbers are even/odd, for cycling through values, or wrapping ranges

Conclusion: The modulus operator % is essential for finding remainders in division, making it invaluable for pattern detection, alternation, and mathematical cycles in programming.

#### Visualizing Division

```
           _____3____   -----------> Quotient
      __2_|   7
                6
            ___________
                 1          -------------> Remainder
```

---

- The modulus % gives us this remainder value (1), which represents the amount that couldn't be evenly divided by the divisor, where 3 is the quotient showing how many complete times the divisor fits into the dividend.

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
