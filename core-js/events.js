// Events
// Events are actions that occur in the browser, like clicks, input, or page load.

// ------------------- BASIC EVENT LISTENERS -------------------
// Selecting a button element from HTML
// Assume <button id="myBtn">Click Me</button> exists in the HTML
const button = document.getElementById("myBtn");

// Adding a click event listener
button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Using an arrow function as the event handler
button.addEventListener("click", () => {
  console.log("Button clicked with arrow function!");
});

// ------------------- EVENT OBJECT -------------------
// Event object contains info about the event
button.addEventListener("click", function (event) {
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
});

// ------------------- KEYBOARD EVENTS -------------------
// Assume <input id="inputField" type="text"> exists
const input = document.getElementById("inputField");

// Keydown: triggered when key is pressed
input.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Keyup: triggered when key is released
input.addEventListener("keyup", (event) => {
  console.log(`Key released: ${event.key}`);
});

// ------------------- MOUSE EVENTS -------------------
// Mouseover: triggered when mouse enters element
button.addEventListener("mouseover", () => {
  console.log("Mouse over the button");
});

// Mouseout: triggered when mouse leaves element
button.addEventListener("mouseout", () => {
  console.log("Mouse left the button");
});

// ------------------- FORM EVENTS -------------------
// Assume <form id="myForm"><input name="email"><button>Submit</button></form>
const form = document.getElementById("myForm");

// Submit event
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload
  console.log("Form submitted!");
  const formData = new FormData(form);
  console.log("Form data:", Object.fromEntries(formData));
});

// Input event: triggers when input value changes
input.addEventListener("input", (event) => {
  console.log("Input value:", event.target.value);
});

// ------------------- CHANGE EVENT -------------------
// Triggered when input or select loses focus after value changes
input.addEventListener("change", (event) => {
  console.log("Final input value:", event.target.value);
});

// ------------------- FOCUS AND BLUR EVENTS -------------------
// Focus: triggered when element gains focus
input.addEventListener("focus", () => {
  console.log("Input focused");
});

// Blur: triggered when element loses focus
input.addEventListener("blur", () => {
  console.log("Input lost focus");
});

// ------------------- WINDOW EVENTS -------------------
// Resize event
window.addEventListener("resize", () => {
  console.log(`Window resized to ${window.innerWidth}x${window.innerHeight}`);
});

// Scroll event
window.addEventListener("scroll", () => {
  console.log("Page scrolled", window.scrollY);
});

// ------------------- EVENT DELEGATION -------------------
// Efficient way to handle events on multiple child elements
// Assume <ul id="list"><li>Item 1</li><li>Item 2</li></ul>
const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`Clicked on list item: ${event.target.textContent}`);
  }
});

// ------------------- STOPPING EVENT PROPAGATION -------------------
const outerDiv = document.getElementById("outer");
const innerDiv = document.getElementById("inner");

outerDiv.addEventListener("click", () => {
  console.log("Outer div clicked");
});

innerDiv.addEventListener("click", (event) => {
  console.log("Inner div clicked");
  event.stopPropagation(); // Prevents outer div handler from firing
});

// ------------------- PREVENT DEFAULT -------------------
// Already demonstrated in form submit
// Prevent default for links
// Assume <a href="https://example.com" id="myLink">Go</a>
const link = document.getElementById("myLink");
link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Default navigation prevented");
});

// ------------------- ON* HTML ATTRIBUTES -------------------
// Can also use inline events (not recommended)
// <button onclick="alert('Clicked!')">Click</button>

// ------------------- CUSTOM EVENTS -------------------
const customEventTarget = new Event("myCustomEvent");

// Add listener
document.addEventListener("myCustomEvent", () => {
  console.log("Custom event triggered!");
});

// Dispatch event
document.dispatchEvent(customEventTarget);

// ------------------- ONE-TIME EVENT LISTENER -------------------
button.addEventListener(
  "click",
  () => {
    console.log("This runs only once");
  },
  { once: true }, // Listener automatically removed after first call
);

// ------------------- PASSING DATA WITH EVENTS -------------------
const customEvent = new CustomEvent("sayHello", { detail: { name: "Alice" } });
document.addEventListener("sayHello", (event) => {
  console.log(`Hello, ${event.detail.name}!`);
});
document.dispatchEvent(customEvent);
