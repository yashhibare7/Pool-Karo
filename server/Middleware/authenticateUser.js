const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const authenticateUser = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token)
    return res
      .status(401)
      .send({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    const user = await User.findById(decoded._id);
    if (!user)
      return res
        .status(401)
        .send({ message: "Invalid token. User not found." });

    req.user = user;
    next();
  } catch (error) {
    res.status(400).send({ message: "Invalid token." });
  }
};

module.exports = { authenticateUser };
