let score = 33;
console.log(score);
console.log(typeof score);
console.log(typeof score);

console.log();

let word = "ball";
console.log(word);
console.log(typeof word);
console.log(typeof word);

console.log();

let mixed = "33balls";
console.log(mixed);
console.log(typeof mixed);
console.log(typeof mixed);

console.log();

let mixedInNumber = Number(mixed);
console.log(mixedInNumber); // NaN (Not a number)
console.log(typeof mixedInNumber);
console.log(typeof mixedInNumber);

console.log();

let value = null;
let valueInNumber = Number(value);
console.log(valueInNumber); // 0

console.log();

let value1 = undefined;
let value1InNumber = Number(value1);
console.log(value1InNumber); // NaN

console.log();

let mixedValue = "abc33";
console.log(mixedValue);
console.log(typeof mixedValue);
console.log(typeof mixedValue);
let mixedValueInNumber = Number(mixedValue);
console.log(mixedValueInNumber); // NaN
console.log(typeof mixedValueInNumber); // Number

// Boolean
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

console.log();

let isLoggedOut = 0;
let booleanIsLoggedOut = Boolean(isLoggedOut);
console.log(booleanIsLoggedOut); // false

// 1 => true, 0 => false
// "" => false
// "tony" => true

// String
let num = 33;
let stringNum = String(num);
console.log(stringNum);
console.log(typeof stringNum);
