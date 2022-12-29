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
	unjointPatientWithRepresentative,
	deletePatient,
} = require("../controllers/patient.route.controller");

// datos eliminados
// router.get("/trash", getPatientInTrash);
// router.delete("/trash/:id", deletePatientInTrash);

// obtener datos
router.get("/", getPatients);
router.get("/:id", getPatient);

// crear datos
router.post("/", createPatient);

// modificar datos
router.put("/:id", updatePatient);
router.put("/:id/join-to/:representativeId", jointPatientWithRepresentative);
router.put(
	"/:id/unjoin-to/:representativeId",
	unjointPatientWithRepresentative
);

router.delete("/:id", deletePatient);
// router.delete("/:id", patientMoveToTrash);

module.exports = router;
