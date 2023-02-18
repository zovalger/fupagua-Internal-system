const express = require("express");
const router = express.Router();

// const { validateCreateVideoLink } = require("../validators/patientsValidator");

const {
	getVideoLinks_RouteController,
	getVideoLink_RouteController,
	createVideoLink_RouteController,
	updateVideoLink_RouteController,
	deleteVideoLink_RouteController,
	getCategories_RouteController,
} = require("../controllers/VideoLink.route.controller");

// obtener datos
router.get("/", getVideoLinks_RouteController);
router.get("/categories", getCategories_RouteController);
router.get("/:id", getVideoLink_RouteController);

// crear datos
router.post("/", createVideoLink_RouteController);

// modificar datos
router.put("/:id", updateVideoLink_RouteController);

router.delete("/:id", deleteVideoLink_RouteController);

module.exports = router;
