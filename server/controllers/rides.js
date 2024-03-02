const Ride = require("../models/Ride");

const addRideController = async (req, res) => {
  const {
    source,
    destination,
    date,
    time,
    vehicleName,
    ownerName,
    phoneNumber,
    priceRange,
    userId,
  } = req.body;

  try {
    const newRide = new Ride({
      source,
      destination,
      date,
      time,
      vehicleName,
      ownerName,
      phoneNumber,
      priceRange,
      userId,
    });
    await newRide.save();
    res.status(201).json({ message: "Ride added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getRideController = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.json(rides);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
const getAllRideController = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.json(rides);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getRidebyUser = async (req, res) => {
  try {
    const { id } = req.params;
    const rides = await Ride.find({ userId: id });
    res.json(rides);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addRideController, getRideController, getAllRideController,getRidebyUser };
