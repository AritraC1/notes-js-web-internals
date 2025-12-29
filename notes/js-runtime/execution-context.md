# JavaScript Execution Context

Everything in JavaScript happens inside an **execution context**.

An execution context is a temporary area in JavaScript where code is executed. Once the code finishes execution, the execution context is automatically deleted.

---

## Components of an Execution Context

An execution context has **two components**:

1. **Memory Component**  
   *(also called Variable Environment)*
2. **Code Component**  
   *(also called Thread of Execution)*

### Memory Component
- Stores variables and functions as **key–value pairs**
- Variables are initially stored with the value `undefined`
- Functions are stored entirely in memory

### Code Component
- Executes the code **one line at a time**

---

## JavaScript Execution Model

JavaScript is a **synchronous, single-threaded language**:
- It can execute **only one command at a time**
- Code is executed in a **specific order (line by line)**

---

## What Happens When JavaScript Code Runs?

When JavaScript code starts running, a **Global Execution Context (GEC)** is created.

The execution context is created in **two phases**:

## Phase 1: Creation Phase (Memory Creation Phase)

> This is a very critical phase.

During this phase:
- JavaScript allocates memory to all **variables** and **functions**
- Variables are assigned the value `undefined`
- Functions are stored entirely in memory

## Phase 2: Code Execution Phase

During this phase:
- Variables are assigned their actual values
- Function invocation occurs

### Function Invocation
- When JavaScript encounters a function call, a **new execution context** is created
- The same two phases (creation and execution) repeat for every function call

#### Parameters vs Arguments
- **Parameters**: Variables defined in the function declaration
- **Arguments**: Values passed to the function during invocation

### Function Completion
- The `return` keyword sends the value back to the execution context where the function was called
- After execution, the function’s execution context is deleted

---

## Completion of Program Execution

- Once JavaScript finishes executing the entire code, the **Global Execution Context** is also deleted automatically.

---

## Call Stack

JavaScript manages execution contexts using a stack called the **Call Stack**.

### How the Call Stack Works
- The **Global Execution Context** sits at the bottom of the stack
- Each new execution context is **pushed** onto the stack
- When an execution context finishes, it is **popped** off the stack
- Follows **LIFO (Last In, First Out)** principle

### Purpose of the Call Stack
- Manages the creation and deletion of execution contexts
- Maintains the **order of execution**

---

## Other Names for Call Stack

The call stack is also known as:
- Execution Context Stack
- Program Stack
- Control Stack
- Runtime Stack
- Machine Stack

---

That is how JavaScript code is executed.
