const express = require("express");
const router = express.Router();

const {
	getPatients_RouteController,
	getPatient_RouteController,
	createPatient_RouteController,
	updatePatient_RouteController,
	deletePatient_RouteController,
} = require("../controllers/Patient.route.controller");

// obtener datos
router.get("/", getPatients_RouteController);
router.get("/:id", getPatient_RouteController);

// crear datos
router.post("/", createPatient_RouteController);

// modificar datos
router.put("/:id", updatePatient_RouteController);

router.delete("/:id", deletePatient_RouteController);

module.exports = router;
