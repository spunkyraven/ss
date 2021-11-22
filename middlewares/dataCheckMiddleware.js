const { body } = require("express-validator");

exports.validationCheck = [
  body("email", "Please enter a valid email").isEmail(),
  body("password", "Password should be at least 6 characters").isLength({
    min: 6,
    max: 12,
  }),
];




