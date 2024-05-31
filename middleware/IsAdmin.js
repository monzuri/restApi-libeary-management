const User = require("../models/User");

const isAdmin = async (req, res, next) => {
  try {
    // Assuming req.userID contains the ID of the authenticated user
    const userID = req.userID;

    // Retrieve the user from the database
    const user = await User.findById(userID);
    console.log(user);

    // Check if user exists and has the role of admin
    if (user && user.role === "admin") {
      // User is an admin, proceed to the next middleware or route handler
      next();
    } else {
      // User is not an admin, return a forbidden status
      res.status(403).json({ message: "Forbidden: Admin privileges required" });
    }
  } catch (error) {
    // If there's an error, return a 500 status
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = isAdmin;
