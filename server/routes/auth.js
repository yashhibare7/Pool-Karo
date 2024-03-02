const { authController } = require("../controllers/auth");

const router = require("express").Router();

router.post("/", authController);

module.exports = router;
