// routes/rides.js
const express = require("express");
const {
  addRideController,
  getRideController,
  getAllRideController,
  getRidebyUser,
} = require("../controllers/rides");
const router = express.Router();

// Add a ride
router.post("/add-ride", addRideController);

// Get all rides
router.get("/get-rides", getRideController);

// Get all rides for display on another web page
router.get("/get-all-rides", getAllRideController);
router.get("/get-user-rides/:id", getRidebyUser);


module.exports = router;
