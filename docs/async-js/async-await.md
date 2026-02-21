# Async/Await

## Introduction

`async` and `await` are modern JavaScript features introduced in ES2017 (ES8) that simplify working with asynchronous code. They are built on top of **Promises** and make asynchronous code easier to read and maintain, resembling synchronous code.

---

## 1. The `async` Keyword

- The `async` keyword is placed before a function declaration or expression.
- It **automatically returns a Promise**.
- If the function returns a value, it becomes a resolved Promise with that value.
- If the function throws an error, it becomes a rejected Promise.

### Syntax

```javascript
async function myFunction() {
  return "Hello";
}

myFunction().then(value => console.log(value)); // Output: "Hello"
```

### Examples
```js
// Example 1: Returning a value
async function greet() {
  return "Hi there!";
}

greet().then(console.log); // "Hi there!"

// Example 2: Throwing an error
async function fail() {
  throw new Error("Oops!");
}

fail().catch(error => console.log(error.message)); // "Oops!"
```

---

## 2. The `await` Keyword
- The await keyword can only be used inside an async function.
- It pauses the execution of the async function until the Promise resolves.
- It returns the resolved value of the Promise.
- If the Promise rejects, it throws an error.

### Syntax
```js
let result = await promise;
```

### Example
```js
function wait(ms) {
  return new Promise(resolve => setTimeout(() => resolve("Done!"), ms));
}

async function run() {
  console.log("Start");
  const result = await wait(2000);
  console.log(result); // "Done!" after 2 seconds
  console.log("End");
}

run();
```

--- 

## 3. Combining `async` and `await`

```js
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
```

**Explanation:**
- `fetch()` returns a Promise.
- `await fetch()` pauses execution until the Promise resolves.
- Using `try/catch`, we can handle errors gracefully, similar to synchronous code.

---

## 4. Error Handling

### Using `try/catch`
```js
async function getData() {
  try {
    const response = await fetch("invalid-url");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

getData();
```

### Using .`catch()` on the Promise
```js
async function getData() {
  const response = await fetch("invalid-url");
  const data = await response.json();
  return data;
}

getData().catch(error => console.error("Failed:", error));
```

---

## 5. Parallel vs Sequential Execution

await pauses execution. If multiple independent Promises are awaited sequentially, it may slow down the code. Use Promise.all for parallel execution.

### Sequential (Slower)
```js
async function sequential() {
  const result1 = await fetch("/api/1");
  const result2 = await fetch("/api/2");
  console.log(result1, result2);
}
```

### Parallel (Faster)
```js
async function parallel() {
  const [result1, result2] = await Promise.all([fetch("/api/1"), fetch("/api/2")]);
  console.log(result1, result2);
}
```

---

## Common Pitfalls
- Using await outside an async function
    - ❌ `const data = await fetch(url);` // Error
    - ✅ Wrap in an async function.
- Blocking the event loop with long-running `awaits`. Avoid await inside loops if requests are independent.
- Ignoring error handling Always use `try/catch` or `.catch()`.

---

## Best Practices
- Use async/await for readability and sequential logic.
- Use Promise.all for parallelizable operations.
- Always handle errors.
- Keep async functions focused—don’t mix too much logic.

---

## Conclusion

`async/await` provides a cleaner, more readable way to write asynchronous JavaScript code. When combined with Promises, error handling, and parallel execution techniques, it makes managing asynchronous operations much easier and less error-prone.

---