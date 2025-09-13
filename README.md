# JavaScript Variables: `var`, `let`, `const` & Type Behavior

## Variable Declaration and Addition

```javascript
let a = 10;
let b = 10;
console.log("sum of 10 + 10 is " + (a + b)); 
// Output: sum of 10 + 10 is 20
```
**Explanation:**  
In this example, JavaScript evaluates the expression inside parentheses first (`a + b`), then concatenates the result with the string. This is similar to how humans solve brackets first.

---

```javascript
let a = 10;
let b = 10;
console.log(a + b + "sum of 10 +10 "); 
// Output: 20sum of 10 +10
```
**Explanation:**  
Here, JavaScript adds the numbers first (`a + b = 20`), then concatenates the result with the string.

---

## Operator Behavior: String and Number

```javascript
console.log("1" + 1); // Output: "11"
console.log("1" * 1); // Output: 1
console.log("1" - 1); // Output: 0
console.log("1" / 1); // Output: 1
```

- With the `+` operator:  
  If you give a string and a number, JavaScript performs **concatenation** because `+` can be used for both addition and string joining.
- With other operators (`*`, `-`, `/`):  
  JavaScript assumes the string should be treated as a number (type coercion), then performs the mathematical operation.

---

## Why does JavaScript behave this way?

**Type Coercion:**  
This automatic conversion between types (string to number, or number to string) is called **coercion**.  
- With `+`, JavaScript can either add or concatenate, so if either operand is a string, it converts both to strings and joins them.
- With `*`, `-`, `/`, JavaScript expects numbers. If you use a string containing a number, it converts it to a number and performs the calculation.

---

## Summary Table

| Expression         | Result      | Explanation                                  |
|--------------------|------------|----------------------------------------------|
| `"1" + 1`          | `"11"`     | String concatenation                         |
| `"1" * 1`          | `1`        | String coerced to number, multiplication     |
| `"1" - 1`          | `0`        | String coerced to number, subtraction        |
| `"1" / 1`          | `1`        | String coerced to number, division           |

---

## Documentation Notes

- JavaScript evaluates expressions from left to right, similar to human logic with math operations.
- The `+` operator can do both addition and string concatenation, depending on the types of its operands.
- Other mathematical operators (`*`, `-`, `/`) only perform numeric operations. If a string is given, JavaScript converts it to a number (type coercion).
- This conversion process is called **coercion**.

---
