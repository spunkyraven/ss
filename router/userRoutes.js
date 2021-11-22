const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
  validationCheckRegister,
} = require("../middlewares/registerDataCheckMiddleware");
const { validationCheck } = require("../middlewares/dataCheckMiddleware");
const { tokenMiddleware } = require("../middlewares/tokenMiddleware");
router.post("/register", validationCheckRegister, userController.register);
router.post("/login", validationCheck, userController.login);
router.get("/getprofile", tokenMiddleware, userController.getUserProfile);
router.put("/editprofile/:id", tokenMiddleware, userController.editProfile);
router.put("/updaterole/:id", tokenMiddleware, userController.updateRole);
router.put("/reserveRide/:id", tokenMiddleware, userController.updateRole);
module.exports = router;
