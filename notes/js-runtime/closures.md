# Closures
A closure is created when a function remembers and accesses variables from its outer (lexical) scope, even after the outer function has finished executing.

> **In simple terms:**
A closure = function + its lexical environment

## Example of a closure
```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
```

### Explanation
- inner() is returned from outer()
- Even after outer() finishes, inner() still has access to count
- This happens because of closure

---

## Why Closures Work?

JavaScript stores a reference to the outer scope variables. These variables are kept in memory as long as the inner function exists.

---

## Common Use Cases

### 1. Data Encapsulation (Private Variables)
```js
function createUser() {
  let password = "secret";

  return {
    getPassword() {
      return password;
    }
  };
}
```

- `password` cannot be accessed directly
- Only through exposed methods

### 2. Function Factories
```js
function multiplyBy(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10
```

### 3. Callbacks & Event Handlers
```js
function setup() {
  let message = "Hello";

  setTimeout(() => {
    console.log(message);
  }, 1000);
}
```

### 4. Maintaining State
```js
function counter() {
  let count = 0;
  return () => ++count;
}

const c = counter();
c(); // 1
c(); // 2
```

### 5. Closure in Loops (Common Pitfall)

**Problem**
```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 4 4 4
```

**Solution using `let`**
```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 1 2 3
```

---

## Memory Considerations

- Closures keep variables in memory
- Overusing closures can cause memory leaks if not handled properly

---

## Key Points to Remember
- Closures allow persistent access to outer variables
- They are created every time a function is created
- Very powerful for encapsulation and state management

---

## One-Line Definition

> A closure is a function that remembers variables from its lexical scope even when executed outside that scope.

---