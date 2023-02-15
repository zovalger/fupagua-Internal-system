const express = require("express");
const router = express.Router();

const { validateCreatePatient } = require("../validators/patientsValidator");

const {
	getPatients_RouteController,
	getPatient_RouteController,
	createPatient_RouteController,
	updatePatient_RouteController,
	deletePatient_RouteController,
	consultPatientHistoryNumber_RouteController,
} = require("../controllers/Patient.route.controller");

// obtener datos
router.get("/", getPatients_RouteController);

router.get("/historyNumber", consultPatientHistoryNumber_RouteController);

router.get("/:id", getPatient_RouteController);

// crear datos
router.post("/", validateCreatePatient, createPatient_RouteController);

// modificar datos
router.put("/:id", updatePatient_RouteController);

router.delete("/:id", deletePatient_RouteController);

module.exports = router;
