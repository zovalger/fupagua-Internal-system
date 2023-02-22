const express = require("express");
const router = express.Router();

// const { validateCreateFupaguaService } = require("../validators/patientsValidator");

const {
	getFupaguaServices_RouteController,
	getFupaguaService_RouteController,
	createFupaguaService_RouteController,
	updateFupaguaService_RouteController,
	deleteFupaguaService_RouteController,
} = require("../controllers/FupaguaService.route.controller");

// obtener datos
router.get("/", getFupaguaServices_RouteController);
router.get("/:id", getFupaguaService_RouteController);

// crear datos
router.post("/", createFupaguaService_RouteController);

// modificar datos
router.put("/:id", updateFupaguaService_RouteController);

router.delete("/:id", deleteFupaguaService_RouteController);

module.exports = router;
