# HTTP Methods
HTTP (HyperText Transfer Protocol) methods define the type of action to be performed on a resource identified by a URL.

Here are clear, structured notes on **HTTP Methods** in Markdown format:

---

## 1. GET

* **Purpose:** Retrieve data from a server
* **Safe:** ✅ Yes (does not modify data)
* **Idempotent:** ✅ Yes (multiple identical requests have same effect)
* **Request Body:** ❌ No (typically not used)

### Example

```http
GET /users/123 HTTP/1.1
Host: example.com
```

### Use Cases

* Fetch user details
* Retrieve web pages
* Load images or files

---

## 2. POST

* **Purpose:** Submit data to create a new resource
* **Safe:** ❌ No
* **Idempotent:** ❌ No
* **Request Body:** ✅ Yes

### Example

```http
POST /users HTTP/1.1
Content-Type: application/json

{
  "name": "John",
  "email": "john@example.com"
}
```

### Use Cases

* Create new user
* Submit form data
* Upload file

---

## 3. PUT

* **Purpose:** Update or completely replace a resource
* **Safe:** ❌ No
* **Idempotent:** ✅ Yes
* **Request Body:** ✅ Yes

### Example

```http
PUT /users/123 HTTP/1.1
Content-Type: application/json

{
  "name": "John Updated",
  "email": "johnupdated@example.com"
}
```

### Use Cases

* Replace entire object
* Update resource with known ID

---

## 4. PATCH

* **Purpose:** Partially update a resource
* **Safe:** ❌ No
* **Idempotent:** ❓ Usually (depends on implementation)
* **Request Body:** ✅ Yes

### Example

```http
PATCH /users/123 HTTP/1.1
Content-Type: application/json

{
  "email": "newemail@example.com"
}
```

### Use Cases

* Update specific fields
* Partial modifications

---

## 5. DELETE

* **Purpose:** Remove a resource
* **Safe:** ❌ No
* **Idempotent:** ✅ Yes
* **Request Body:** ❌ Rarely used

### Example

```http
DELETE /users/123 HTTP/1.1
Host: example.com
```

### Use Cases

* Delete user
* Remove record

---

## 6. HEAD

* **Purpose:** Same as GET but returns headers only
* **Safe:** ✅ Yes
* **Idempotent:** ✅ Yes
* **Response Body:** ❌ No

### Use Cases

* Check if resource exists
* Validate content length
* Check last-modified date

---

## 7. OPTIONS

* **Purpose:** Get supported HTTP methods for a resource
* **Safe:** ✅ Yes
* **Idempotent:** ✅ Yes

### Example

```http
OPTIONS /users HTTP/1.1
Host: example.com
```

### Use Cases

* CORS preflight requests
* API capability discovery

---

## 8. TRACE

* **Purpose:** Echo back received request (diagnostics)
* **Safe:** ✅ Yes
* **Idempotent:** ✅ Yes
* **Security Risk:** ⚠ Often disabled

---

## 9. CONNECT

* **Purpose:** Establish a tunnel to the server
* **Common Use:** HTTPS through proxy
* **Safe:** ❌ No
* **Idempotent:** ❌ No

---

# Safe vs Idempotent

| Method  | Safe | Idempotent  |
| ------- | ---- | ----------- |
| GET     | ✅    | ✅          |
| POST    | ❌    | ❌          |
| PUT     | ❌    | ✅          |
| PATCH   | ❌    | ❓          |
| DELETE  | ❌    | ✅          |
| HEAD    | ✅    | ✅          |
| OPTIONS | ✅    | ✅          |
| TRACE   | ✅    | ✅          |
| CONNECT | ❌    | ❌          |

---

# Quick Summary

* **GET** → Retrieve data
* **POST** → Create new resource
* **PUT** → Replace resource
* **PATCH** → Partial update
* **DELETE** → Remove resource

---

