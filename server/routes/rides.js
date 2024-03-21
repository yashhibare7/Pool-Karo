// routes/rides.js
const express = require("express");
const {
  addRideController,
  getRideController,
  getAllRideController,
  getRidebyUser,
  deleteRidebyId,
  editRideController,
} = require("../controllers/rides");
const router = express.Router();

// Add a ride
router.post("/add-ride", addRideController);

// Get ride by ID
router.get("/get-ride/:id", getRideController);

// Edit a ride
router.put("/edit-ride/:id", editRideController);

// Get all rides for display on another web page
router.get("/get-all-rides", getAllRideController);
router.get("/get-user-rides/:id", getRidebyUser);
router.delete("/delete-ride/:id", deleteRidebyId);

module.exports = router;
