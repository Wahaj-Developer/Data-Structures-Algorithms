# 02 — Loops

What a loop is, why I use loops, the basic `for` loop and what each part of it does, counting up and down, what an infinite loop is, and what happens when I leave parts of the `for` loop empty.

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

### What is the value of `i` after the loop ends?

```js
var i = 1;
for (; i <= 10; i++) {
  console.log(i);
}
console.log(i);
// Output: 1 2 3 ... 10, then 11 at the last
```

In this I also get 11 at the last. When the loop gets 11 it closes, so the loop only prints up to 10, but 11 is still saved in `i` because it is a `var`. So when I print `i` after the loop, I get 11. The start part is empty here because `i` is already created above the loop.

### What if I leave out the change part?

```js
for (var i = 1; i <= 10; ) {
  console.log(i);
}
// Output: 1 1 1 1 ... forever
```

It is valid code but it is infinite, because I did not tell what to do with 1, so it prints 1 in infinite.

### What if I leave out the condition?

```js
for (var i = 1; ; ) {
  console.log(i);
}
```

Valid code but infinite.

### What if I leave out everything?

```js
for (;;) {
  console.log("Hello world");
}
```

Valid code but infinite.

### What does "valid code but infinite" mean?

It means the code is syntactically correct but logically wrong. JavaScript accepts it, but it never stops.

### When is a `for` loop invalid code?

```js
for (;) {
  console.log("Hello");
}
```

Invalid code. We have to give all the loop parts to tell it. `for (;;)` is valid, `for (;)` is not.

### How do I remember the three parts?

Start -> Condition -> What to do. Where you start, and what you are doing.

## Problems solved

- [Print "Hello" 5 times with a for loop](./practice.js)
- [Print the values from 1 to 22](./practice.js)
- [Print the values going down from 23](./practice.js)
- [Infinite loop when i++ is used in the countdown](./practice.js)
- [Print i after the loop when i is a var](./practice.js)
- [Valid but infinite loops: missing change part, missing condition, for (;;)](./practice.js)
- [Invalid for loop with only one semicolon](./practice.js)