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

const deleteRidebyId = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Ride.findById(id);

    if (item) {
      await Ride.deleteOne({ _id: id }).then(
        res.status(200).json({ message: "Ride deleted Successfully" })
      );
    } else {
      res.json("Ride id is invalid");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

const editRideController = async (req, res) => {
  const { source, destination, date, time, vehicleName, ownerName, phoneNumber, priceRange } = req.body;
  const { id } = req.params;

  try {
    const updatedRide = await Ride.findByIdAndUpdate(id, {
      source,
      destination,
      date,
      time,
      vehicleName,
      ownerName,
      phoneNumber,
      priceRange
    }, { new: true });

    res.json(updatedRide);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addRideController,
  getRideController,
  getAllRideController,
  getRidebyUser,
  deleteRidebyId,
  editRideController,
};
