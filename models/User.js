const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment-timezone");

const userSchema = Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  profilePic: {
    type: Schema.Types.Mixed,
  },
  Attachment: {
    type: Schema.Types.Mixed,
  },
  age: Number,
  phone: String,
  created_at: {
    type: Date,
    default: moment.tz("Europe/Paris").format("LLLL"),
  },
  role: {
    type: String,
    enum: ["passenger", "driver"],
    default: "passenger",
  },
});

module.exports = mongoose.model("user", userSchema);
