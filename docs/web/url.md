# URL
A URL (Uniform Resource Locator) is the address used to access a resource on the internet.
It specifies where a resource is located and how to retrieve it.

**Example:**
https://www.example.com/index.html

## Structure of URL
A URL typically consists of the following parts:

### 1. Protocol (Scheme)
Indicates how the browser should access the resource.

**Types:**
1. http – HyperText Transfer Protocol
2. https – Secure version of HTTP
3. ftp – File Transfer Protocol

**Example:**
`https://`

### Domain Name
The name of the website/server. It identifies the location of the server on the internet.

**Example:**
`www.example.com`

**Parts of a domain:**
1. Subdomain: www
2. Second-level domain: example
3. Top-level domain (TLD): .com, .org, .edu, .in

### Path
Specifies the exact resource (page/file) on the server.

**Example**
`/folder/page.html`

### Query Parameters (Optional)
- Provide additional data to the server.
- Start with ?
- Multiple parameters separated by &

**Example:**
`?id=10&category=books`

### Fragment (Optional)
- Starts with `#`
- Refers to a specific section within a webpage.

**Example:**
`#section2`

## Complete URL Example
`https://www.example.com/products/item.html?id=15#reviews`

Breakdown:
- Protocol → https
- Domain → www.example.com
- Path → /products/item.html
- Query → ?id=15
- Fragment → #reviews

## Difference Between URL and URI
- **URI (Uniform Resource Identifier)** → Identifies a resource
- **URL** → A type of URI that also tells how to locate it

>Note: All URLs are URIs, but not all URIs are URLs.