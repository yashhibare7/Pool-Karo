const { getUserDetails, signUp } = require("../controllers/users");

const router = require("express").Router();

router.post("/", signUp);

// Get all rides
router.get("/get-user", getUserDetails);

module.exports = router;
