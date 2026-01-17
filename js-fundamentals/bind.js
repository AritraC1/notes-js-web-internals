// Bind
// bind() creates a new function with 'this' set to the provided value
// It can also preset arguments (partial application)

// Example 1: Basic usage of bind
const person = {
    name: "Alice",
    greet: function(greeting) {
        console.log(`${greeting}, my name is ${this.name}`);
    }
};

const greetAlice = person.greet.bind(person);
greetAlice("Hello"); // Hello, my name is Alice

// If we didn't use bind, 'this' would be undefined (or global object in non-strict mode)
const greetFunc = person.greet;
greetFunc("Hi"); // Hi, my name is undefined

// Example 2: bind with arguments (partial application)
function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2); // 'this' is irrelevant here, first argument is preset
console.log(double(5)); // 10
console.log(double(10)); // 20

// Example 3: Using bind in event handlers
const button = {
    text: "Click me",
    clickHandler: function() {
        console.log(`Button says: ${this.text}`);
    }
};

// Simulate a DOM button (for demonstration)
const fakeButton = { addEventListener: function(event, handler) { handler(); } };

// Without bind, 'this' inside clickHandler would not refer to our button object
fakeButton.addEventListener("click", button.clickHandler); // undefined

// With bind, we ensure 'this' refers to the correct object
fakeButton.addEventListener("click", button.clickHandler.bind(button)); // Button says: Click me

// Example 4: Using bind to fix 'this' in callbacks
const numbers = [1, 2, 3, 4, 5];

const multiplier = {
    factor: 3,
    multiply: function(num) {
        return num * this.factor;
    }
};

// map with bind ensures 'this' is correct
const multipliedNumbers = numbers.map(multiplier.multiply.bind(multiplier));
console.log(multipliedNumbers); // [3, 6, 9, 12, 15]

// Example 5: Bind with constructor functions
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
    };
}

const Bob = new Person("Bob", 30);

// We can bind Bob's sayHello for use elsewhere
const helloBob = Bob.sayHello.bind(Bob);
setTimeout(helloBob, 100); // Hello, I'm Bob and I'm 30 years old

// Example 6: Bind chaining and immutability
function add(a, b, c) {
    return a + b + c;
}

// Bind first argument
const add5 = add.bind(null, 5);
console.log(add5(10, 15)); // 30

// Bind first two arguments
const add5and10 = add5.bind(null, 10); // second bind does NOT override first bound argument
console.log(add5and10(20)); // 35 (5 + 10 + 20)

// Notes on bind:
// 1. The original function is not modified; bind returns a new function.
// 2. You can bind 'this' and partially apply arguments simultaneously.
// 3. Binding a function multiple times does not override previously bound 'this'.
// 4. Useful in event handlers, callbacks, and when working with methods extracted from objects.

