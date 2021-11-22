const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("databse is connected");
  } catch (error) {
    console.log("databse is not connected", error);
  }
};

module.exports = connectDB;
