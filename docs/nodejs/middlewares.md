# Middlewares in Packages

Middleware is a function that runs **between the request and the response** in a server application.

It has access to:

* `req` (request object)
* `res` (response object)
* `next()` (function to pass control)

---

## Basic Middleware Structure

```js
function middlewareName(req, res, next) {
  // Do something
  next();
}
```

* `req` → Incoming request
* `res` → Outgoing response
* `next()` → Pass control to next middleware

---

## Types of Middlewares


### Application-Level Middleware

Applied to the entire app.

```js
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
```

✔ Runs for every request
✔ Used for logging, parsing, authentication

### Router-Level Middleware

Applied to specific routes.

```js
router.use((req, res, next) => {
  console.log("Router middleware");
  next();
});
```

✔ Runs only for routes inside that router
✔ Keeps code modular

### Built-in Middleware

Provided by frameworks.

Example (Express):

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

Common built-ins:

* `express.json()` → Parses JSON body
* `express.urlencoded()` → Parses form data
* `express.static()` → Serves static files

### Third-Party Middleware

Installed from npm packages.

Examples:

```js
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
```

Common third-party middlewares:

* `cors` → Enables Cross-Origin Resource Sharing
* `morgan` → Logs HTTP requests
* `helmet` → Adds security headers
* `cookie-parser` → Parses cookies
* `body-parser` → Parses request body

### Error-Handling Middleware

Special middleware with **4 parameters**:

```js
function errorHandler(err, req, res, next) {
  res.status(500).json({ message: err.message });
}
```

✔ Catches errors
✔ Must be defined **after all routes**
✔ Has `(err, req, res, next)`

---

## Middleware Execution Flow

Middleware runs **in order of definition**.

Example:

```js
app.use(middleware1);
app.use(middleware2);
app.get("/", handler);
```

Execution order:

```
Request → middleware1 → middleware2 → route handler → Response
```

---

## Why Use Middleware?

* Logging
* Authentication
* Authorization
* Validation
* Parsing request body
* Error handling
* Security
* Rate limiting

---

## Example: Authentication Middleware

```js
function authMiddleware(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome!");
});
```

---

## Key Points

* Middleware controls request flow
* Order matters
* Always call `next()` unless sending response
* Error middleware requires 4 parameters
* Can be global or route-specific

---

## Conclusion
Middleware is a function that works between a request and a response to check, process, or control data so the system stays secure and runs properly.

---
