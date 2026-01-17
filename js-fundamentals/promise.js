// Promises

// A simple function that returns a promise which resolves after a given time
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${ms}ms`);
    }, ms);
  });
}

// Using the promise with then and catch
wait(1000)
  .then((result) => {
    console.log(result); // Prints "Resolved after 1000ms"
    return wait(500); // Return another promise for chaining
  })
  .then((result) => {
    console.log(result); // Prints "Resolved after 500ms"
    throw new Error("Something went wrong"); // Simulate an error
  })
  .catch((error) => {
    console.error("Caught an error:", error.message);
    return "Recovered value"; // Recovery, can continue chain
  })
  .then((result) => {
    console.log("After recovery:", result);
  });

// Promises can also reject directly
function mayReject(value) {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve(`Success with ${value}`);
    } else {
      reject(`Failure with ${value}`);
    }
  });
}

// Using multiple promises with Promise.all
Promise.all([mayReject(1), mayReject(2), mayReject(3)])
  .then((results) => {
    console.log("Promise.all results:", results);
  })
  .catch((error) => {
    console.log("Promise.all error:", error);
  });

// Using Promise.race - first settled promise wins
Promise.race([wait(1000), wait(200), wait(500)]).then((result) => {
  console.log("Promise.race winner:", result);
});

// Using Promise.allSettled to get outcome of all promises without stopping on first rejection
Promise.allSettled([mayReject("A"), mayReject("B"), mayReject("C")]).then(
  (results) => {
    results.forEach((res, index) => {
      if (res.status === "fulfilled") {
        console.log(`Promise ${index} fulfilled with`, res.value);
      } else {
        console.log(`Promise ${index} rejected with`, res.reason);
      }
    });
  },
);

// Promise chaining with async/await syntax
async function asyncDemo() {
  try {
    const first = await wait(300);
    console.log("Async/await first:", first);

    const second = await mayReject("AsyncValue");
    console.log("Async/await second:", second);
  } catch (err) {
    console.error("Async/await caught error:", err);
  } finally {
    console.log("Async/await demo complete");
  }
}

asyncDemo();

// Demonstrating that promises are executed immediately when created
const immediatePromise = new Promise((resolve) => {
  console.log("This runs immediately upon promise creation");
  resolve("Immediate result");
});

immediatePromise.then((res) => console.log(res));

// Demonstrating nested promises and flattening behavior
Promise.resolve(42)
  .then((val) => {
    console.log("Outer then received:", val);
    return Promise.resolve(val * 2); // Returning a promise
  })
  .then((val) => {
    console.log("Flattened inner promise result:", val);
  });

// Catching errors in nested promises
Promise.resolve()
  .then(() => {
    return Promise.reject("Nested rejection");
  })
  .catch((err) => {
    console.error("Caught nested rejection:", err);
  });
