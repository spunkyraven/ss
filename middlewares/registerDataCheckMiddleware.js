const { body } = require("express-validator");

exports.validationCheckRegister = [
  body("firstName", "Please enter your First Name").not().isEmpty(),
  body("lastName", "Please enter your Last Name").not().isEmpty(),
  body("email", "Please enter a valid email").isEmail(),
  body("password", "Password should be at least 6 characters").isLength({
    min: 6,
    max: 12,
  }),

  body("age", "Please enter your age (Numeric)")
    .not()
    .isEmpty()
    .isNumeric()
    .isLength({
      min: 2,
      max: 3,
    }),
  body("phone", "Please enter your phone (Numeric)")
    .not()
    .isEmpty()
    .isNumeric()
    .isLength({
      min: 8,
      max: 12,
    }),
];
