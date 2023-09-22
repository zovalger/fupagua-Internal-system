const express = require("express");
const router = express.Router();

const {
	getFupaguaServices_RouteController,
	getFupaguaService_RouteController,
	createFupaguaService_RouteController,
	updateFupaguaService_RouteController,
	deleteFupaguaService_RouteController,
} = require("../controllers/FupaguaService.route.controller");
const {
	validateFupaguaServiceData,
} = require("../validators/landingEdit/fupaguaServiceValidator");
const { authUser } = require("../middleware/authUser");

router.get("/:id", authUser, getFupaguaService_RouteController);
router.put(
	"/:id",
	authUser,
	validateFupaguaServiceData,
	updateFupaguaService_RouteController
);
router.delete("/:id", authUser, deleteFupaguaService_RouteController);

router.get("/", authUser, getFupaguaServices_RouteController);

router.post(
	"/",
	authUser,
	validateFupaguaServiceData,
	createFupaguaService_RouteController
);

module.exports = router;
