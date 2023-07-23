const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");

// Protect Routes token base
const requireSignIN = async (req, res, next) => {
  try {
    // token is inside header
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "User is not Authorizaed",
    });
  }
};

// admin access
const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unouthorized Access as Admin",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Admin middleware",
      error,
    });
  }
};

module.exports = { requireSignIN, isAdmin };
