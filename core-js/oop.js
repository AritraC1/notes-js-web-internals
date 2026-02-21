// OOP
// Classes are blueprints for creating objects with properties and methods.
// OOP principles include encapsulation, inheritance, and polymorphism.

// ------------------- BASIC CLASS -------------------
class Person {
  constructor(name, age) {
    this.name = name; // public property
    this.age = age;
  }

  // Method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an instance of Person
const alice = new Person("Alice", 25);
alice.greet(); // Hello, my name is Alice and I am 25 years old.

// ------------------- GETTER AND SETTER -------------------
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter for area
  get area() {
    return this.width * this.height;
  }

  // Setter to set both width and height at once
  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle(10, 5);
console.log("Area:", rect.area); // 50
rect.dimensions = { width: 20, height: 10 };
console.log("New area:", rect.area); // 200

// ------------------- PRIVATE PROPERTIES AND METHODS -------------------
// Using # to declare private fields (ES2020+)
class BankAccount {
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance; // private property
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`${amount} deposited. New balance: ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance");
    } else {
      this.#balance -= amount;
      console.log(`${amount} withdrawn. New balance: ${this.#balance}`);
    }
  }

  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount("Bob", 1000);
account.deposit(500);
account.withdraw(200);
console.log("Current balance via getter:", account.balance);

// ------------------- STATIC METHODS AND PROPERTIES -------------------
// Static methods belong to the class itself, not instances
class MathUtils {
  static square(x) {
    return x * x;
  }

  static cube(x) {
    return x * x * x;
  }
}

console.log("Square of 5:", MathUtils.square(5)); // 25
console.log("Cube of 3:", MathUtils.cube(3)); // 27

// ------------------- INHERITANCE -------------------
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age); // Call parent constructor
    this.position = position;
  }

  // Overriding method
  greet() {
    console.log(`Hello, I am ${this.name}, ${this.age} years old, and I work as a ${this.position}.`);
  }
}

const john = new Employee("John", 30, "Developer");
john.greet(); // Hello, I am John, 30 years old, and I work as a Developer.

// ------------------- SUPER KEYWORD -------------------
// Using super to access parent methods
class Manager extends Employee {
  constructor(name, age, position, teamSize) {
    super(name, age, position);
    this.teamSize = teamSize;
  }

  greet() {
    super.greet(); // Call Employee's greet
    console.log(`I manage a team of ${this.teamSize} people.`);
  }
}

const manager = new Manager("Sarah", 40, "Project Manager", 10);
manager.greet();

// ------------------- ENCAPSULATION -------------------
// Encapsulation hides implementation details
class Car {
  #speed = 0; // private property

  accelerate(amount) {
    this.#speed += amount;
    console.log(`Speed: ${this.#speed} km/h`);
  }

  brake(amount) {
    this.#speed = Math.max(0, this.#speed - amount);
    console.log(`Speed: ${this.#speed} km/h`);
  }

  get currentSpeed() {
    return this.#speed;
  }
}

const car = new Car();
car.accelerate(50);
car.brake(20);
console.log("Current speed via getter:", car.currentSpeed);

// ------------------- POLYMORPHISM -------------------
// Different classes with the same method name
class Dog {
  speak() {
    console.log("Woof!");
  }
}

class Cat {
  speak() {
    console.log("Meow!");
  }
}

function makeAnimalSpeak(animal) {
  animal.speak(); // Works for any object with a speak method
}

const dog = new Dog();
const cat = new Cat();
makeAnimalSpeak(dog); // Woof!
makeAnimalSpeak(cat); // Meow!

// ------------------- CLASS EXPRESSIONS -------------------
const Animal = class {
  constructor(type) {
    this.type = type;
  }

  describe() {
    console.log(`This is a ${this.type}`);
  }
};

const bird = new Animal("Bird");
bird.describe(); // This is a Bird