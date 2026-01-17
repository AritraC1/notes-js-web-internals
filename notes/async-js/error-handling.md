# Error Handling in JavaScript

JavaScript provides several ways to handle errors, from basic `try/catch` statements to custom error types and async error handling. Proper error handling is essential for building robust applications.

---

## 1. Types of Errors

1. **Syntax Errors**
   - Occur when the code is not valid JavaScript.
   - Example:
     ```javascript
     // SyntaxError: Unexpected token
     const a = ;
     ```

2. **Runtime Errors**
   - Occur during execution.
   - Example:
     ```javascript
     let obj = null;
     console.log(obj.property); // TypeError: Cannot read property 'property' of null
     ```

3. **Logical Errors**
   - Code runs but produces incorrect results.
   - Example:
     ```javascript
     function add(a, b) {
         return a - b; // Logical error
     }
     console.log(add(5, 3)); // Output: 2 (incorrect)
     ```

---

## 2. The `try...catch` Statement

The `try...catch` block is the primary mechanism for handling errors.

```javascript
try {
    // Code that may throw an error
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
} finally {
    // Optional block that runs regardless of error
    console.log("Cleanup actions...");
}
```

**Notes:**
- try block contains code that may throw.
- catch block receives an Error object.
- finally block always executes.

---

## 3. Throwing Custom Errors

You can throw errors manually using the throw statement:
```js
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    divide(10, 0);
} catch (err) {
    console.error(err.name + ":", err.message);
}
```

### Common Built-in Error Types
- **Error** – Generic error
- **TypeError** – Invalid type
- **ReferenceError** – Referencing undefined variables
- **RangeError** – Out-of-range values
- **SyntaxError** – Invalid code
- **URIError** – Invalid URI functions

---

## 4. Handling Errors in Asynchronous Code

### 4.1 Promises
Errors in promises can be handled with .catch():
```js
asyncFunction()
    .then(result => console.log(result))
    .catch(err => console.error("Promise error:", err));
```

### 4.2 Async/Await
With async/await, errors can be caught using try/catch:

```js
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error("Async/Await error:", err);
    }
}
```

---

## 5. Error Propagation
Errors can be propagated to higher levels for centralized handling:

```js
function readConfig() {
    throw new Error("Config file missing");
}

function startApp() {
    try {
        readConfig();
    } catch (err) {
        console.error("App failed:", err.message);
    }
}

startApp();
```

---

## 6. Best Practices
1. Catch only what you can handle

```js
try {
    riskyOperation();
} catch (err) {
    // Only handle expected errors
    if (err instanceof TypeError) {
        handleTypeError(err);
    } else {
        throw err; // Re-throw unknown errors
    }
}
```

2. Use meaningful error messages
3. Clean up resources in finally
4. Avoid swallowing errors silently
5. Validate inputs to reduce runtime errors

---

## 7. Advanced Techniques
### 7.1 Custom Error Classes

```js
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateAge(age) {
    if (age < 0) throw new ValidationError("Age cannot be negative");
}

try {
    validateAge(-5);
} catch (err) {
    console.error(err.name + ":", err.message);
}
```

### 7.2 Global Error Handling (Node.js)

```js
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
});
```

---

## Summary

| Concept                   | Usage                                                      |
| ------------------------- | ---------------------------------------------------------- |
| `try/catch/finally`       | Handle synchronous errors                                  |
| `throw`                   | Manually throw an error                                    |
| Promises `.catch()`       | Handle errors in asynchronous promises                     |
| `async/await` + try/catch | Handle errors in asynchronous code                         |
| Custom error classes      | Create meaningful, type-specific errors                    |
| Global error handlers     | Catch uncaught exceptions and unhandled promise rejections |

Proper error handling leads to more reliable, maintainable, and user-friendly applications. Always aim to anticipate errors and fail gracefully.

---