const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = Schema({
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  carModel: {
    type: String,
    required: [true, "Car Model is required"],
  },
  seatingCapacity: {
    type: Number,
    required: [true, "Seating Capacit  is required"],
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: [true, "Price  is required"],
  },
  dateTime: {
    type: Date,
    required: [true, "Date Time  is required"],
  },
  from: {
    type: String,
    required: [true, "Starting Point  is required"],
  },
  to: {
    type: String,
    required: [true, "Arrival Point  is required"],
  },
  from_lat: mongoose.Types.Decimal128,
  from_lng: mongoose.Types.Decimal128,
  to_lat: mongoose.Types.Decimal128,
  to_lng: mongoose.Types.Decimal128,
  tripGender: {
    type: String,
    default: "mixed",
  },
  luggage: Boolean,
  music: Boolean,
  smoking: Boolean,
  airConditioned: Boolean,
});

module.exports = mongoose.model("trip", tripSchema);

// status:String,
// Confirmation:String,
