# 02 — Loops

What a loop is, why I use loops, the basic `for` loop and what each part of it does, counting up and down, and what an infinite loop is.

### What is a loop?

A loop is used to perform multiple tasks, or repeat a task multiple times, without writing the same code again and again, by giving a condition.

Example: if I want to print "Hello" 5 times, I could write this:

```js
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

With a loop it is just this:

```js
for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}
// Output: Hello (5 times)
```

### Why do I use loops?

1. Doing a repeated task at once.
2. Writing less code. More lines of code means a bigger code base, and a smaller code file has fewer MB, so the user can download things fast.
3. If the file size is big, users take time to load the website. It makes a bad user experience and it is very bad for the brand.

### How does a `for` loop work?

```js
for (start, end, change) {
  console.log();
}
```

In the "Hello" example, `let i = 1` is the start, `i <= 5` is the end, and `i++` is the change:

```js
for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}
```

### What does each part of the `for` loop do?

```js
for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}
```

```
for ( let i = 1 ;  i <= 5  ;  i++ )  { console.log("Hello"); }
      |             |          |         |
      |             |          |         what to print after completing 1 loop
      |             |          increase i by 1 after each loop
      |             condition: when to stop
      create i and start from 1
```

- `let i = 1` creates `i` and starts it from 1.
- `i <= 5` is the condition, it tells the loop when to stop.
- `i++` increases `i` by 1 after each loop.
- The code inside `{ }` is what gets run each time one loop is completed.

### Can I start from a number other than 1?

Yes. `i = 1` means start from 1, and I can change it according to what I need. If I write `i = 11`, the numbers start from 11.

### How do I print the values from 1 to 22?

```js
for (let i = 1; i < 23; i++) {
  console.log(i);
}
// Output: 1 2 3 ... 22
```

### How do I print the values going down?

```js
for (let i = 23; i > 1; i--) {
  console.log(i);
}
// Output: 23 22 21 ... 2
```

Here I use `i--`, which means subtract 1 from 23 each loop, until it reaches the last value that is greater than 1.

### What happens if I use `i++` in the countdown?

If I use `i++` instead of `i--` in the countdown above, it prints from 23 and goes on like 24, 25, 26, 27 and so on. The condition `i > 1` never becomes false, so the loop never ends. That is called an infinite loop, and it hangs the browser.

## Problems solved

- [Print "Hello" 5 times with a for loop](./practice.js)
- [Print the values from 1 to 22](./practice.js)
- [Print the values going down from 23](./practice.js)
- [Infinite loop when i++ is used in the countdown](./practice.js)