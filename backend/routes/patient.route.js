const express = require("express");
const router = express.Router();

const {
	getPatientInTrash,
	deletePatientInTrash,
	getPatient,
	getPatients,
	createPatient,
	updatePatient,
	jointPatientWithRepresentative,
	patientMoveToTrash,
} = require("../controllers/patient.route.controller");

// datos eliminados
router.get("/trash", getPatientInTrash);
router.delete("/trash/:id", deletePatientInTrash);

// obtener datos
router.get("/", getPatients);
router.get("/:id", getPatient);

// crear datos
router.post("/", createPatient);

// modificar datos
router.put("/:id", updatePatient);
router.post("/:id/join-to/:patientId", jointPatientWithRepresentative);
router.delete("/:id", patientMoveToTrash);

module.exports = router;
