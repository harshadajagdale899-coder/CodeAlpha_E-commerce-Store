const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../Backend/config/db");
const productRoutes = require("../Backend/Routes/productRoutes");

const app = express();
const PORT = 3000;
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;

//Middleware
app.use(express.json());

//Database Connection
connectDB();

app.use("/api/products", productRoutes);
app.use("/api/products/:id", productRoutes);

//Test Route
app.get("/", (req, res) => {
  res.send("Ecommerce server is running");
});

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
