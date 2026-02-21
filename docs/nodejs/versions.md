# Versions

Example version:

```
4.18.2
```

* **1st Part** → `4`
* **2nd Part** → `18`
* **3rd Part** → `2`

---

## 3rd Part (Last Part) – Minor Fixes / Optional Update

* Small bug fixes
* Performance improvements
* Internal changes
* No breaking changes
* Safe to update

Example:
`4.18.1` → `4.18.2`

---

## 2nd Part – Recommended Bug Fix / Security Fix

* Backward-compatible improvements
* Security patches
* New features (non-breaking)
* Recommended to update

Example:
`4.17.0` → `4.18.0`

---

## 1st Part – Major Release / Breaking Update

* Breaking changes
* API changes
* Requires code updates
* May not be backward-compatible

Example:
`4.18.2` → `5.0.0`

---

# Version Prefix Symbols

## `^` – Compatible With Version

Installs updates that **do not change the first number** (major version).

Example:

```
^4.18.2
```

Means:

```
>=4.18.2 <5.0.0
```

✔ Installs:

* Minor updates
* Patch updates

❌ Does NOT install:

* Major updates

---

## `~` – Approximate Matching

Installs updates that **do not change the second number** (minor version).

Example:

```
~4.18.2
```

Means:

```
>=4.18.2 <4.19.0
```

✔ Installs:

* Patch updates only

❌ Does NOT install:

* Minor updates
* Major updates

---
