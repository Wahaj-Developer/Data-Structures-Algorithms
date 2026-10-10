# 02 — Loops

What a loop is, why I use loops, and the basic `for` loop.

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

## Problems solved

- [Print "Hello" 5 times with a for loop](./practice.js)