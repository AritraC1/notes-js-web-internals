// Async
// Asynchronous code allows tasks to run without blocking the main thread.

// ------------------- CALLBACKS -------------------
// A function passed as an argument to another function
function fetchDataCallback(url, callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Sample" }; // Simulated data
    callback(data);
  }, 1000);
}

// Using the callback
fetchDataCallback("api/data", (data) => {
  console.log("Data received via callback:", data);
});

// Callbacks can lead to "callback hell" when nested
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 500);
  }, 500);
}, 500);

// ------------------- PROMISES -------------------
// A Promise represents a value that may be available now, later, or never
const fetchDataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve({ id: 2, name: "Promise Data" });
    } else {
      reject("Error fetching data");
    }
  }, 1000);
});

// Consuming a promise with then/catch/finally
fetchDataPromise
  .then((data) => console.log("Data received via promise:", data))
  .catch((error) => console.log("Promise error:", error))
  .finally(() => console.log("Promise finished"));

// Chaining promises
const multiplyByTwo = (x) => x * 2;

Promise.resolve(5)
  .then(multiplyByTwo)
  .then((result) => result + 10)
  .then((final) => console.log("Chained result:", final)); // 20

// ------------------- ASYNC/AWAIT -------------------
// Cleaner syntax for consuming promises
async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();
    console.log("Data fetched with async/await:", data);
  } catch (error) {
    console.log("Error fetching data:", error);
  } finally {
    console.log("Async function finished");
  }
}

getData();

// Async function returning a value automatically wrapped in a promise
async function addAsync(a, b) {
  return a + b;
}

addAsync(5, 7).then((result) => console.log("Async add result:", result));

// ------------------- ERROR HANDLING -------------------
// Promises: use catch
Promise.reject("Something went wrong").catch((error) =>
  console.log("Caught promise error:", error),
);

// Async/await: use try/catch
async function failAsync() {
  try {
    await Promise.reject("Async error");
  } catch (error) {
    console.log("Caught async/await error:", error);
  }
}
failAsync();

// ------------------- PARALLEL ASYNC -------------------
// Running multiple promises in parallel
const fetchUser = () =>
  new Promise((resolve) => setTimeout(() => resolve({ userId: 1 }), 1000));
const fetchPosts = () =>
  new Promise((resolve) => setTimeout(() => resolve(["Post1", "Post2"]), 1500));

Promise.all([fetchUser(), fetchPosts()]).then(([user, posts]) => {
  console.log("Parallel results:", user, posts);
});

// Promise.allSettled to get all results regardless of success/failure
Promise.allSettled([fetchUser(), Promise.reject("Failed")]).then((results) => {
  console.log("All settled results:", results);
});

// ------------------- SEQUENTIAL ASYNC -------------------
// Await in a loop runs sequentially
const tasks = [1000, 500, 1500];
async function runSequential() {
  for (const t of tasks) {
    await new Promise((resolve) => setTimeout(resolve, t));
    console.log(`Task done after ${t}ms`);
  }
}
runSequential();

// ------------------- ASYNC ITERATORS -------------------
// Example using for-await-of
async function* asyncGenerator() {
  yield new Promise((resolve) => setTimeout(() => resolve(1), 500));
  yield new Promise((resolve) => setTimeout(() => resolve(2), 1000));
  yield new Promise((resolve) => setTimeout(() => resolve(3), 1500));
}

(async () => {
  for await (const value of asyncGenerator()) {
    console.log("Async iterator value:", value);
  }
})();

// ------------------- FETCH WITH ERROR HANDLING -------------------
async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/99999",
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    console.log("Fetched todo:", data);
  } catch (error) {
    console.log("Fetch error:", error);
  }
}

fetchTodo();
