const { body } = require("express-validator");

exports.validationCheck = [
 
body("from" , "Please enter your depart point").not().isEmpty(),
body("to" , "Please enter your arrival point").not().isEmpty(),
body("carModel" , "Please enter your car model").not().isEmpty(),
body("price" , "Please enter price per person (Numeric)").not().isEmpty().isNumeric(),
body("dateTime" , "Please enter date of trip").not().isEmpty(),
body("seatingCapacity" , "Please enter seating capacity").not().isEmpty(),

];