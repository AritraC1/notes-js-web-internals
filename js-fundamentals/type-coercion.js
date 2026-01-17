// JavaScript’s type coercion

console.log("1" + 2); // 12
console.log("2" - 1); // 2 - 1 = 1
console.log("Hi!" + " How you doing?"); // Hi! How you doing?
console.log(1 + "1"); // 11
console.log(1 - "1"); // 1 - 1 = 0

// Key rule to remember
// + (plus operator)
// If either operand is a string, JavaScript concatenates (joins strings)

// Otherwise, it adds numbers
// -, *, / (math operators)
// JavaScript always converts operands to numbers
// Strings that look like numbers get converted automatically

console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); 

console.log(+true); // 1
console.log(+""); // 0
