const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = Schema({
  idReservation: {
    type: String,
  },
  idOffre: {
    type: String,
  },
});

module.exports = mongoose.model("reservation", reservationSchema);

// status:String,
// Confirmation:String,
