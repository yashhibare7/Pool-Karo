// routes/rides.js
const express = require('express');
const router = express.Router();
const Ride = require('../models/Ride');

// Add a ride
router.post('/add-ride', async (req, res) => {
  const { source, destination, date, time, vehicleName, ownerName ,phoneNumber, priceRange } = req.body;

  try {
    const newRide = new Ride({ source, destination, date, time, vehicleName, ownerName, phoneNumber , priceRange });
    await newRide.save();
    res.status(201).json({ message: 'Ride added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all rides
router.get('/get-rides', async (req, res) => {
  try {
    const rides = await Ride.find();
    res.json(rides);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all rides for display on another web page
router.get('/get-all-rides', async (req, res) => {
  try {
    const rides = await Ride.find();
    res.json(rides);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
