const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("DB connection is Successful!");
  } catch (err) {
    console.log("Database connection is Failed!");
    console.log("Error : ", err.message);
    process.exit();
  }
};

module.exports = connectDB;
