// models/Ride.js
const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  source: String,
  destination: String,
  date: Date,
  time: String,
  vehicleName: String,
  ownerName: String,
  phoneNumber: Number,
  priceRange: String,
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;
