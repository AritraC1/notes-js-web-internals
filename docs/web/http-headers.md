## HTTP Headers

## What Are HTTP Headers?

HTTP headers are **key–value pairs** sent between a client (browser) and a server as part of an HTTP request or response.
They provide **metadata** about the request/response (not the actual body content).

They are used in the **HTTP** and its secure version **HTTPS**.

---

## Structure of an HTTP Message

```
<start-line>
<header-name>: <value>
<header-name>: <value>

<optional body>
```

Headers appear **after the start line** and **before the body**, separated by a blank line.

---

## Types of HTTP Headers

HTTP headers are grouped into four main categories:

### Request Headers

Sent **by the client** to the server.

| Header          | Purpose                              |
| --------------- | ------------------------------------ |
| `Host`          | Domain name of the server            |
| `User-Agent`    | Information about the client/browser |
| `Accept`        | Media types the client can process   |
| `Authorization` | Credentials for authentication       |
| `Cookie`        | Sends stored cookies to the server   |
| `Referer`       | The previous page URL                |

#### Example

```http
GET /index.html HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: text/html
```

---

### Response Headers

Sent **by the server** back to the client.

| Header             | Purpose                     |
| ------------------ | --------------------------- |
| `Server`           | Server software information |
| `Set-Cookie`       | Sends cookies to client     |
| `Location`         | Redirect URL                |
| `WWW-Authenticate` | Authentication method       |
| `Cache-Control`    | Caching rules               |

#### Example

```http
HTTP/1.1 200 OK
Server: Apache
Content-Type: text/html
```

---

### Representation Headers (Entity Headers)

Describe the **body content**.

| Header             | Purpose                   |
| ------------------ | ------------------------- |
| `Content-Type`     | Type of media (MIME type) |
| `Content-Length`   | Size of the response body |
| `Content-Encoding` | Compression (gzip, br)    |
| `Content-Language` | Language of content       |

#### Example:

```http
Content-Type: application/json
Content-Length: 245
```

---

### General Headers

Apply to both request and response.

| Header       | Purpose                         |
| ------------ | ------------------------------- |
| `Date`       | Timestamp of message            |
| `Connection` | Control connection (keep-alive) |
| `Via`        | Proxy tracking                  |

---

### Security-Related Headers

Important for web security:

| Header                      | Purpose                |
| --------------------------- | ---------------------- |
| `Strict-Transport-Security` | Enforces HTTPS         |
| `Content-Security-Policy`   | Prevents XSS attacks   |
| `X-Frame-Options`           | Prevents clickjacking  |
| `X-Content-Type-Options`    | Prevents MIME sniffing |

---

### Common Content Types (MIME Types)

| MIME Type             | Meaning           |
| --------------------- | ----------------- |
| `text/html`           | HTML document     |
| `application/json`    | JSON data         |
| `application/xml`     | XML               |
| `multipart/form-data` | Form file uploads |

---

## HTTP Versions and Headers

Different versions of HTTP handle headers slightly differently:

* **HTTP/1.1** — Text-based headers
* **HTTP/2** — Binary format, header compression (HPACK)
* **HTTP/3** — Uses QUIC, improved performance

---

### Caching Headers

Control browser and proxy caching:

| Header          | Description                    |
| --------------- | ------------------------------ |
| `Cache-Control` | max-age, no-cache, no-store    |
| `ETag`          | Resource version identifier    |
| `Last-Modified` | Timestamp of last update       |
| `If-None-Match` | Conditional request using ETag |

---

### Authentication Headers

| Header             | Use                 |
| ------------------ | ------------------- |
| `Authorization`    | Sends credentials   |
| `WWW-Authenticate` | Defines auth scheme |

Common auth types:

* Basic
* Bearer (JWT tokens)

---

### CORS Headers (Cross-Origin Resource Sharing)

| Header                         | Purpose                |
| ------------------------------ | ---------------------- |
| `Access-Control-Allow-Origin`  | Allowed domains        |
| `Access-Control-Allow-Methods` | Allowed HTTP methods   |
| `Access-Control-Allow-Headers` | Allowed custom headers |

---

### Custom Headers

* Can be created by developers
* Should follow naming conventions
* Traditionally prefixed with `X-` (now discouraged)

Example:

```http
X-Request-ID: 12345
```

---

## Key Concepts

* Headers are **case-insensitive**
* Multiple headers with same name are allowed
* Some headers are automatically managed by browsers
* Headers help with:

  * Security
  * Caching
  * Authentication
  * Content negotiation
  * Performance optimization

---

## Summary

HTTP headers:

* Carry metadata
* Control communication behavior
* Enable caching, auth, compression, and security
* Are essential for modern web applications

---