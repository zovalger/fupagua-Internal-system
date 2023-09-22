const express = require("express");
const router = express.Router();
const {
	getAllUser_controller,
	getUser_controller,
	updateUser_controller,
	registerUser_controller,
} = require("../controllers/user.route.controller");

const {
	loginUser_controller,
	profileUser_controller,
	logoutUser_controller,
	getUserLogoutTime_controller,
} = require("../controllers/auth.route.controller");

const validateUserData = require("../validators/users/userValidator");
const { authUser } = require("../middleware/authUser");

router.post("/login", loginUser_controller);
router.post("/profile", profileUser_controller);
router.post("/logout", logoutUser_controller);

router.get("/:id/logout-time", getUserLogoutTime_controller);

router.get("/", authUser, getAllUser_controller);
router.post("/", authUser, validateUserData, registerUser_controller);
router.get("/:id", authUser, getUser_controller);
router.put("/:id", authUser, validateUserData, updateUser_controller);

module.exports = router;
