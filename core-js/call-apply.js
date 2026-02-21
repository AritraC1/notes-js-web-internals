// Call & Apply
// Both call() and apply() allow you to invoke a function with a specific 'this' value
// The difference is in how they handle arguments:
//   - call(thisArg, arg1, arg2, ...)
//   - apply(thisArg, [arg1, arg2, ...])

// Example 1: Basic usage of call
const person = {
  name: "Charlie",
  greet: function (greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  },
};

// Direct call
person.greet("Hi"); // Hi, my name is Charlie

// Using call to set 'this' explicitly
const anotherPerson = { name: "Dana" };
person.greet.call(anotherPerson, "Hello"); // Hello, my name is Dana

// Example 2: Basic usage of apply
// Arguments are passed as an array
person.greet.apply(anotherPerson, ["Good morning"]); // Good morning, my name is Dana

// Example 3: Using call/apply with standalone functions
function introduce(city, country) {
  console.log(`I am ${this.name} from ${city}, ${country}`);
}

const user = { name: "Eve" };

// call with separate arguments
introduce.call(user, "Paris", "France"); // I am Eve from Paris, France

// apply with arguments as array
introduce.apply(user, ["Berlin", "Germany"]); // I am Eve from Berlin, Germany

// Example 4: Using call/apply with Math functions
const numbers = [5, 10, 2, 8, 3];

// Math.max normally does not accept an array
const max1 = Math.max.call(null, 5, 10, 2, 8, 3); // 10
const max2 = Math.max.apply(null, numbers); // 10 (arguments passed as array)

console.log(max1, max2);

// Example 5: Using call/apply to borrow methods
const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };

// Array.prototype.join expects a real array
const resultCall = Array.prototype.join.call(arrayLike, "-"); // "a-b-c"
const resultApply = Array.prototype.join.apply(arrayLike, ["|"]); // "a|b|c"

console.log(resultCall, resultApply);

// Example 6: Changing context in event handlers
const button = {
  text: "Press me",
  clickHandler: function (prefix) {
    console.log(`${prefix}: ${this.text}`);
  },
};

// Simulate a DOM button
const fakeButton = {
  addEventListener: function (event, handler) {
    handler();
  },
};

// Using call inside a wrapper function
fakeButton.addEventListener("click", function () {
  button.clickHandler.call(button, "Clicked");
}); // Clicked: Press me

// Example 7: call/apply with constructor functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Employee(name, age, role) {
  Person.call(this, name, age); // Inherit Person properties
  this.role = role;
}

const emp = new Employee("Frank", 28, "Developer");
console.log(emp); // Employee { name: 'Frank', age: 28, role: 'Developer' }

// Notes on call/apply:
// 1. call and apply immediately invoke the function with the specified 'this'.
// 2. Use call when you have individual arguments, apply when you have them as an array.
// 3. Useful for method borrowing, dynamic context changes, and constructor inheritance.
// 4. Unlike bind, call/apply do not create a new function; they execute it immediately.
