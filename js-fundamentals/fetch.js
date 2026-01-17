// Fetch

// Basic fetch request to get data from an API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    // The fetch API resolves successfully even on HTTP errors
    console.log("HTTP status:", response.status);
    if (!response.ok) {
      // Throwing an error if HTTP status is not 2xx
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse JSON body
  })
  .then((data) => {
    console.log("Data received from fetch:", data);
  })
  .catch((error) => {
    console.error("Fetch error caught:", error);
  });

// Fetch with custom headers and POST method
const postData = {
  title: "Hello World",
  body: "This is a post created via fetch",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("POST request response:", data);
  })
  .catch((error) => {
    console.error("POST request error:", error);
  });

// Using async/await with fetch
async function fetchAsyncDemo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    console.log("Users fetched with async/await:", users);
  } catch (err) {
    console.error("Async/await fetch error:", err);
  } finally {
    console.log("Async/await fetch demo complete");
  }
}

fetchAsyncDemo();

// Handling multiple fetch requests with Promise.all
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

Promise.all(
  urls.map((url) =>
    fetch(url).then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    }),
  ),
)
  .then((results) => {
    console.log("Multiple fetch results:", results);
  })
  .catch((err) => {
    console.error("Error in multiple fetch:", err);
  });

// Demonstrating fetch with error simulation
fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error("Fetch failed for invalid endpoint:", err));

// Fetch with AbortController to cancel request
const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/posts", { signal })
  .then((res) => res.json())
  .then((data) => console.log("This may not log if aborted:", data))
  .catch((err) => {
    if (err.name === "AbortError") {
      console.warn("Fetch request was aborted");
    } else {
      console.error("Fetch error:", err);
    }
  });

// Abort the request after 100ms
setTimeout(() => controller.abort(), 100);

// Fetching binary data (like images or files)
fetch("https://via.placeholder.com/150")
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.blob(); // Get binary data
  })
  .then((blob) => {
    console.log("Fetched binary data:", blob);
    // Convert blob to URL for demonstration
    const imageURL = URL.createObjectURL(blob);
    console.log("Image URL created from blob:", imageURL);
  })
  .catch((err) => console.error("Fetch binary data error:", err));
