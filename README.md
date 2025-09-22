# JavaScript Variables: `var`, `let`, `const`

## Key Concepts

- **Variable:**  
  A named container for storing data.  
  Example: `let score = 10;`

- **Operator:**  
  A symbol that performs an operation on values.  
  Examples: `+`, `-`, `=`, `*`, `/`

- **Operation of Operator:**  
  The action performed by the operator.  
  Example: `5 + 2` performs addition, resulting in `7`.

---

## Variable Declaration Keywords

| Keyword   | Scope         | Hoisting         | Re-declaration | Mutability | Use Case                |
|-----------|--------------|------------------|----------------|------------|-------------------------|
| `var`     | Function     | Yes (undefined)  | Allowed        | Yes        | Legacy, avoid in modern |
| `let`     | Block        | Yes (TDZ error)  | Not allowed    | Yes        | General use             |
| `const`   | Block        | Yes (TDZ error)  | Not allowed    | No         | Constants, references   |

**TDZ:** Temporal Dead Zone (access before declaration throws error)

---

## Examples

### 1. Correct Usage

```javascript
var a = 12;
let b = 13;
const c = 14;
console.log(a, b, c); // Output: 12 13 14
```

### 2. Scope Example

```javascript
{
  var x = 1;
  let y = 2;
  const z = 3;
}
console.log(x); // 1 (function/global scope)
console.log(y); // Error: y is not defined
console.log(z); // Error: z is not defined
```

### 3. Hoisting Behavior

```javascript
// 'var' is hoisted and initialized as undefined
console.log(a); // Output: undefined
var a = 10;

// 'let' and 'const' are hoisted but not initialized
console.log(b); // Error: Cannot access 'b' before initialization
let b = 20;

console.log(c); // Error: Cannot access 'c' before initialization
const c = 30;
```

### 4. Re-declaration

```javascript
var foo = 1;
var foo = 2; // Allowed

let bar = 1;
let bar = 2; // Error: Identifier 'bar' has already been declared

const baz = 1;
const baz = 2; // Error: Identifier 'baz' has already been declared
```

### 5. Mutability

```javascript
let score = 100;
score = 200; // Allowed

const PI = 3.14159;
PI = 3.15; // Error: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4); // Allowed (object contents can change)
```

### 6. Undefined vs. Not Defined

```javascript
console.log(x); // Error: x is not defined (never declared)

var y;
console.log(y); // Output: undefined (declared, no value)
```

---

## Data Types and Type Checking

### Addition of Same Data Types

```javascript
let a = 10;
let b = 10;
console.log(a + b); // Output: 20
```
- Both variables are numbers, so the result is a number.

### Addition of Number and String (Concatenation)

```javascript
let a = 10; // Number
let b = "10"; // String
console.log(a + b); // Output: "1010"
console.log(typeof(a + b)); // Output: "string"
```
- The `+` operator with a number and a string results in **string concatenation**.
- `typeof` is a special JavaScript operator (not a property or method) that helps you identify the type of data.

### String Concatenation in Expressions

```javascript
let a = 10;
let b = 10;
console.log("sum of 10 and 10 is" + a + b);
// Output: "sum of 10 and 10 is1010"
```
- JavaScript evaluates from left to right.  
- `"sum of 10 and 10 is" + a` results in a string, then adding `b` to a string concatenates `b` as a string as well.

### How JavaScript Handles Mixed Types

- When you add a number and a string with `+`, JavaScript converts the number to a string and concatenates.
- This process is called **concatenation**.

---

## Why use `let`/`const` over `var`?

- **Block Scope:**  
  `let` and `const` are confined to `{}` blocks, making code safer and more predictable.
- **No Hoisting Issues:**  
  They prevent access before declaration, throwing a clear error instead of returning `undefined`.
- **No Re-declaration:**  
  You cannot accidentally declare the same variable twice, which helps prevent bugs.
- **Mutability:**  
  Use `const` for values that should not change, `let` for those that will.

**Best Practice:**  
Prefer `const` for variables that never change, otherwise use `let`.  
Avoid `var` in modern JavaScript.

---

## Quick Reference

- Use `const` for constants and object references.
- Use `let` for variables that will change.
- Avoid `var` unless maintaining legacy code.

---

## Swapping Two Numbers

You can swap two numbers in different ways. This is a common interview topic and basic JavaScript practice.

### First Method: Using a Third Variable

```javascript
let a = 10;
let b = 20;
let c = a; // c = 10
a = b;     // a = 20
b = c;     // b = 10
```
- Here, a third variable `c` is used to temporarily store the value of `a`.

### Second Method: Using Arithmetic Operators

```javascript
let a = 10;
let b = 20;
a = a + b; // a = 30
b = a - b; // b = 10
a = a - b; // a = 20
```
- This method uses addition and subtraction, no third variable needed.

### Third Method: Using Array Destructuring

```javascript
let a = 10;
let b = 20;
[a, b] = [b, a]
```
- This is the shortest and most modern way to swap values in JavaScript.

---

## Operators

### Division `/` Operator

```javascript
let a = 12;
let b = 22;
console.log(a / b); // Output will be in decimal points
```
- `/` is the divide operator.

If you want to remove the decimal points and get only the integer (consient), use `Math.floor()`:

```javascript
console.log(Math.floor(a / b)); // Output: 0
```
- `Math.floor` is a method that removes the decimal and gives you the integer part.

### Modulus `%` Operator

```javascript
let a = 7;
let b = 2;
console.log(a % b); // Output: 1
```
- `%` gives the **remainder** after division.

#### Division Example Illustration

```
           _____3____   -----------> Consient
      __2_|   7
                6
            ___________
                 1          -------------> Reminder
```
- In this example, `7 / 2` gives a consient (quotient) of `3` and a remainder of `1`.

---

