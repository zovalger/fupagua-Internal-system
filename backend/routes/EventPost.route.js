const express = require("express");
const router = express.Router();

const {
	getEventPosts_RouteController,
	getEventPost_RouteController,
	createEventPost_RouteController,
	updateEventPost_RouteController,
	deleteEventPost_RouteController,
} = require("../controllers/EventPost.route.controller");

const {
	validateEventPostData,
} = require("../validators/landingEdit/eventPostValidator");
const { authUser } = require("../middleware/authUser");

router.get("/:id", authUser, getEventPost_RouteController);
router.delete("/:id", authUser, deleteEventPost_RouteController);
router.put(
	"/:id",
	authUser,
	validateEventPostData,
	updateEventPost_RouteController
);

router.post(
	"/",
	authUser,
	validateEventPostData,
	createEventPost_RouteController
);
router.get("/", authUser, getEventPosts_RouteController);

module.exports = router;
