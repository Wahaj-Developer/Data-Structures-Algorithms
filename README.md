# JavaScript Variables: `var`, `let`, `const` & Type Behavior

---

## Variable Declaration and Addition

```javascript
let a = 10;
let b = 10;
console.log("sum of 10 + 10 is " + (a + b)); 
// Output: sum of 10 + 10 is 20
```
**Explanation:**  
JavaScript solves the bracket first (`a + b`), then concatenates the result with the string, just like humans do in math.

---

```javascript
let a = 10;
let b = 10;
console.log(a + b + "sum of 10 +10 "); 
// Output: 20sum of 10 +10
```
**Explanation:**  
JavaScript first solves `a + b`, then concatenates the string.

---

## Operator Behavior: String and Number

```javascript
console.log("1" + 1); // Output: "11"
console.log("1" * 1); // Output: 1
console.log("1" - 1); // Output: 0
console.log("1" / 1); // Output: 1
```

- If you use string + number with `+`, JavaScript does **concatenation**.
- For other operators (`*`, `-`, `/`), JavaScript **coerces** the string to a number and performs the operation.
- `+` has two purposes (addition & concatenation), other operators only do math.

**Coercion:**  
JavaScript automatically converts types to perform operations.

---

## Type Checking with `typeof`

```javascript
let a = 10;
let b = "10";
console.log(a + b); // Output: "1010"
console.log(typeof(a + b)); // Output: "string"
```
- `typeof` is a special keyword/operator used to check the data type.
- When you add a number and a string, the result is a string (**concatenation**).

---

## Accept and Print Answer

```javascript
let age = prompt("Enter your age");
```
**What is prompt?**  
- `prompt` is a function used to take input from the user.
- The value from `prompt` is always received as a **string**.

---

### How to Get Number Input

```javascript
let age = Number(prompt("Enter your age"));
```
- If you want a number, wrap `prompt` with `Number()`.
- If the user enters a string that is not a number (e.g., `"123abc"`), the result is `NaN`.
- **NaN** stands for "Not a Number" and is still of type `number`.

---

**Type Casting:**  
- Changing a value from string to number (or vice versa) is called **type casting**.
- JavaScript uses type casting automatically in many situations.

---

## Summary Table

| Expression         | Result      | Explanation                                  |
|--------------------|------------|----------------------------------------------|
| `"1" + 1`          | `"11"`     | String concatenation                         |
| `"1" * 1`          | `1`        | String coerced to number, multiplication     |
| `"1" - 1`          | `0`        | String coerced to number, subtraction        |
| `"1" / 1`          | `1`        | String coerced to number, division           |
| `Number("123abc")` | `NaN`      | Not a number, result is NaN                  |
| `typeof NaN`       | `"number"` | NaN is a number type                         |

---

## Documentation Notes

- JavaScript evaluates from left to right, similar to human logic with math operations.
- The `+` operator does addition and string concatenation, depending on operand types.
- Other mathematical operators (`*`, `-`, `/`) only perform numeric operations, using **coercion** to convert strings to numbers.
- **Type casting** is converting values between types, such as string to number.
- `prompt` always returns a string. Use `Number()` for numeric input from the user.
- `NaN` is a special value representing "Not a Number", but its type is still `number`.

---
