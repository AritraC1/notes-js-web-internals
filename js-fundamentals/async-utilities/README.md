# Async Utilities

> Understanding JavaScript asynchronous behavior by building it from scratch.

This directory contains a collection of **small, focused async utilities** implemented using native JavaScript constructs such as **Promises, async/await, closures, and timers**.

The goal is not to create a production-ready library, but to deeply understand **how asynchronous JavaScript works at runtime**.

---

## 🎯 Why This Exists

Async JavaScript is often taught as syntax:
- `async / await`
- `Promise.all`
- `setTimeout`

This folder focuses on **behavior**:
- How promises are scheduled
- How errors propagate
- How concurrency differs from sequencing
- How the event loop coordinates async work

Each utility is designed to expose one or more of these concepts.

---

## 📂 Utilities Overview

### `sleep(ms)`
Delays execution for a given number of milliseconds.

**Concepts explored:**
- Timers
- Macrotask queue
- Promise resolution timing

---

### `timeout(promise, ms)`
Wraps a promise and rejects if it does not settle within the given time.

**Concepts explored:**
- `Promise.race`
- Cancellation patterns
- Error handling

---

### `retry(fn, retries)`
Retries an asynchronous function a fixed number of times before failing.

**Concepts explored:**
- Closures
- Recursion
- Error propagation
- Async control flow

---

### `parallel(tasks)`
Executes multiple asynchronous tasks concurrently.

**Concepts explored:**
- Concurrency vs parallelism
- `Promise.all`
- Failure behavior

---

### `sequential(tasks)`
Executes asynchronous tasks one after another.

**Concepts explored:**
- Deterministic execution order
- Async iteration
- Await chaining

---

### `promiseAll(promises)`
A custom implementation of `Promise.all`.

**Concepts explored:**
- Promise state tracking
- Resolution ordering
- Short-circuiting on rejection

---

## 🧠 Design Principles

- **Minimal abstractions**  
  Only native JavaScript APIs are used.

- **Single responsibility**  
  Each utility demonstrates a specific async concept.

- **Readable over clever**  
  Code is optimized for understanding, not brevity.

---

## 🧪 How to Run

From the repository root:

```bash
node async-utilities/index.js
```

---