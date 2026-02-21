// Number
console.log("------------- Number -------------");
const balance = 1000;
console.log(balance);

const currentBalance = new Number(1000);
console.log(currentBalance);

console.log(currentBalance.toString().length);
console.log(currentBalance.toFixed(2));

const pi = 3.14159265359;
console.log(pi.toPrecision(4));

const bigValue = 1000000;
console.log(bigValue.toLocaleString("en-IN"));

// Maths
console.log("------------- Maths -------------");
console.log(Math);
console.log(Math.abs(-4)); // negative to positive
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // chooses top value - 5
console.log(Math.ceil(4.9)); // chooses bottom value - 4
console.log(Math.sqrt(49)); // 7
console.log(Math.pow(5, 2)); // 5**2 = 25
console.log(Math.min(3, 4, 1, 8)); // 1
console.log(Math.max(3, 4, 1, 8)); // 8
console.log((Math.random() * 10) + 1); // random value every time

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)));
