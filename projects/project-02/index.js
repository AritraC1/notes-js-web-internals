const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const allRoutes = require("./routes/allRoutes");
const connectToMongoDB = require("./connection/connectMongoDb");

dotenv.config();

// Decalarations
const app = express();
const PORT_NUMBER = process.env.PORT;

// Database Connections
connectToMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", allRoutes);

// Start server
app.listen(PORT_NUMBER, () => {
  console.log(`The server is running on localhost ${PORT_NUMBER}`);
});
