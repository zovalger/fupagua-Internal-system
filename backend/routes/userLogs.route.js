const express = require("express");
const router = express.Router();

const { authUser } = require("../middleware/authUser");
const {
	getAllUserLogs_controller,
	getUserLogs_by_userId_controller,
} = require("../controllers/userLogs.route.controller");

router.get("/", authUser, getAllUserLogs_controller);
router.get("/:id", authUser, getUserLogs_by_userId_controller);

module.exports = router;
