const jwt = require("jsonwebtoken");
const config = require("../config/default.json");
const Trip = require("../models/Trip");

// verify token recieved from the front after generation !token has the id of the user connected

const tokenMiddleware = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token)
      return res
        .status(401)
        .json({ errors: [{ msg: "UNAUTHORIZED OPERATION !" }] });

    const payload = await jwt.verify(token, process.env.SECRET);
    req.userId = payload.sub;
    next();
  } catch (err) {
    res.status(401).json({ errors: [{ msg: err.message }] });
  }
};

// who's delete/update trip?
const checkTripOwner = async (req, res, next) => {
  try {
    const trip = await Trip.findOne({ _id: req.params.id, owner: req.userId });
    if (!trip) return res.status(401).json({ err: "UNAUTHORIZED" });
    next();
  } catch (err) {
    res.status(401).json({ errors: [{ msg: err.message }] });
  }
};

module.exports = { tokenMiddleware, checkTripOwner };
