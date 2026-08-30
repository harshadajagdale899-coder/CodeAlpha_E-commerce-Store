const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const PORT = 3000;
const DB = dotenv.config({ path: "./Backend/config.env" });

//Middleware
app.use(express.json());

//Test Route
app.get("/", (req, res) => {
  res.send("Ecommerce server is running");
});

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
