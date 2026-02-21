const http = require("http"); // http built in nodejs
const dotenv = require("dotenv");
const fs = require("fs");
const url = require("url");

dotenv.config();

const PORT_NUMBER = process.env.PORT;

// req, res part - callback is a handler (request handler)
const myServer = http.createServer((req, res) => {
  // console.log(req); // req is an object
  const log = `${Date.now()}: ${req.method} ${req.url} New request received\n`;
  const myUrl = url.parse(req.url);
  console.log(myUrl);
  fs.appendFile("./node-http-server/log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      // home slash - /
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        // const username = myUrl.query.myname
        res.end("I am server");
        break;
      default:
        res.end("404 Not found");
    }
  });
});

myServer.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port number: ${PORT_NUMBER}`);
});
