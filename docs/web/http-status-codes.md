# HTTP Status Codes

HTTP status codes are **3-digit numbers** returned by a server to indicate the result of a client’s request in **HTTP** / **HTTPS**.

They appear in the **status line** of the response:

```http
HTTP/1.1 200 OK
```

---

## Structure of Status Code

```
HTTP-Version Status-Code Reason-Phrase
```

Example:

```http
HTTP/1.1 404 Not Found
```

* `404` → Status code
* `Not Found` → Human-readable message

---

## Status Code Categories

Status codes are divided into **5 classes**:

| Range | Category      | Meaning               |
| ----- | ------------- | --------------------- |
| 1xx   | Informational | Request received      |
| 2xx   | Success       | Request successful    |
| 3xx   | Redirection   | Further action needed |
| 4xx   | Client Error  | Client made a mistake |
| 5xx   | Server Error  | Server failed         |

---

### 1xx — Informational

Rarely seen in normal web development.

| Code | Meaning             |
| ---- | ------------------- |
| 100  | Continue            |
| 101  | Switching Protocols |
| 103  | Early Hints         |

Used during request processing before final response.

---

### 2xx — Success

Indicates the request was successfully received and processed.

| Code | Meaning    | Common Use                      |
| ---- | ---------- | ------------------------------- |
| 200  | OK         | Standard success                |
| 201  | Created    | Resource created (POST)         |
| 202  | Accepted   | Request accepted but processing |
| 204  | No Content | Success with no response body   |

#### Example

```http
HTTP/1.1 201 Created
Content-Type: application/json
```

---

### 3xx — Redirection

Client must take additional action.

| Code | Meaning            | Use Case               |
| ---- | ------------------ | ---------------------- |
| 301  | Moved Permanently  | Permanent redirect     |
| 302  | Found              | Temporary redirect     |
| 304  | Not Modified       | Cache validation       |
| 307  | Temporary Redirect | Keeps same HTTP method |
| 308  | Permanent Redirect | Keeps same HTTP method |

#### Example

```http
HTTP/1.1 301 Moved Permanently
Location: https://example.com
```

---

### 4xx — Client Errors

The issue is on the client side.

| Code | Meaning               | Cause                   |
| ---- | --------------------- | ----------------------- |
| 400  | Bad Request           | Invalid syntax          |
| 401  | Unauthorized          | Authentication required |
| 403  | Forbidden             | No permission           |
| 404  | Not Found             | Resource missing        |
| 405  | Method Not Allowed    | Wrong HTTP method       |
| 408  | Request Timeout       | Client too slow         |
| 409  | Conflict              | Resource conflict       |
| 422  | Unprocessable Content | Validation failed       |
| 429  | Too Many Requests     | Rate limit exceeded     |

#### Example

```http
HTTP/1.1 404 Not Found
```

---

### 5xx — Server Errors

The server failed to fulfill a valid request.

| Code | Meaning               | Cause                     |
| ---- | --------------------- | ------------------------- |
| 500  | Internal Server Error | Generic server error      |
| 501  | Not Implemented       | Feature not supported     |
| 502  | Bad Gateway           | Invalid upstream response |
| 503  | Service Unavailable   | Server overloaded/down    |
| 504  | Gateway Timeout       | Upstream timeout          |

#### Example

```http
HTTP/1.1 503 Service Unavailable
Retry-After: 120
```

---

## Commonly Used Status Codes (Most Important)

If preparing for interviews or backend development, focus on:

* `200` — OK
* `201` — Created
* `204` — No Content
* `301` / `302` — Redirect
* `400` — Bad Request
* `401` — Unauthorized
* `403` — Forbidden
* `404` — Not Found
* `409` — Conflict
* `500` — Internal Server Error
* `503` — Service Unavailable

---

## Status Codes & REST APIs

Typical REST patterns:

| Operation | Success Code |
| --------- | ------------ |
| GET       | 200          |
| POST      | 201          |
| PUT       | 200 or 204   |
| PATCH     | 200 or 204   |
| DELETE    | 204          |

Error cases:

* Validation → 400 / 422
* Auth failure → 401
* Permission issue → 403

---

## Important Concepts

* Status codes are part of the **response**, not request
* They help clients decide what to do next
* Browsers behave differently based on status codes
* APIs rely heavily on proper status code usage

---

## HTTP Versions

Status codes exist across:

* **HTTP/1.1**
* **HTTP/2**
* **HTTP/3**

The meaning of codes remains the same across versions.

---

## Summary

HTTP status codes:

* Are 3-digit response indicators
* Divided into 5 categories
* Help clients understand request results
* Are critical in REST API design

---
