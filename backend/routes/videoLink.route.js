const express = require("express");
const router = express.Router();

const {
	getVideoLinks_RouteController,
	getVideoLink_RouteController,
	createVideoLink_RouteController,
	updateVideoLink_RouteController,
	deleteVideoLink_RouteController,
	getCategories_RouteController,
	verifyExistUrl_RouteController,
} = require("../controllers/VideoLink.route.controller");

const {
	validateVideoLinkData,
	validatorExistUrl,
} = require("../validators/landingEdit/videoLinkValidator");
const { authUser } = require("../middleware/authUser");

// obtener datos
router.get("/", authUser, getVideoLinks_RouteController);
router.get("/categories", authUser, getCategories_RouteController);
router.get(
	"/exists",
	authUser,

	validatorExistUrl,
	verifyExistUrl_RouteController
);

router.get("/:id", authUser, getVideoLink_RouteController);
router.delete("/:id", authUser, deleteVideoLink_RouteController);
router.put(
	"/:id",
	authUser,
	validateVideoLinkData,
	updateVideoLink_RouteController
);
router.post(
	"/",
	authUser,
	validateVideoLinkData,
	createVideoLink_RouteController
);

module.exports = router;
