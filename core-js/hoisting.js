// HOISTING - Hoisting in JS is a phenomenon where the user can access functions and variables even before the user have initialised it.

// This is valid
getFirstName();

function getFirstName() {
  console.log("First Name is Tony");
}

// Cannot access 'getName' before initialization, here in arrow function getName behaves like a variable
getName();

const getName = () => {
  console.log("I am Tony Stark!");
};
