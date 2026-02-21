// Comparison

console.log("=== NUMBER COMPARISONS ===");
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false

console.log("\n=== STRING COMPARISONS ===");
console.log("apple" === "apple"); // true
console.log("apple" !== "Apple"); // true (case-sensitive)
console.log("apple" > "banana"); // false (lexicographical)

console.log("\n=== LOOSE vs STRICT EQUALITY ===");
console.log(5 == "5"); // true  (type coercion)
console.log(5 === "5"); // false (no type coercion)
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log("\n=== BOOLEAN COMPARISONS ===");
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true

console.log("\n=== NULL COMPARISONS ===");
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true - null is converted to 0
console.log(null <= 0); // true - null is converted to 0
console.log(null == 0); // false
console.log(null === 0); // false

console.log("\n=== ARRAY COMPARISONS ===");
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

console.log(arr1 === arr2); // false (different references)
console.log(arr1 === arr3); // true  (same reference)

// Simple array value comparison
const arraysEqual = (a, b) =>
  a.length === b.length && a.every((val, i) => val === b[i]);

console.log(arraysEqual(arr1, arr2)); // true

console.log("\n=== OBJECT COMPARISONS ===");
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true

// Simple object value comparison
const objectsEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

console.log(objectsEqual(obj1, obj2)); // true

console.log("\n=== NaN COMPARISONS ===");
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true

console.log("\n=== NULL & UNDEFINED ===");
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log("\n=== TERNARY COMPARISON ===");
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);
