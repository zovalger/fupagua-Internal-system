const express = require("express");
const router = express.Router();

const {
	getPatient,
	getPatients,
	createPatient,
	updatePatient,
	deletePatient,
} = require("../controllers/patient.route.controller");

// obtener datos
router.get("/", getPatients);
router.get("/:id", getPatient);

// crear datos
router.post("/", createPatient);

// modificar datos
router.put("/:id", updatePatient);

router.delete("/:id", deletePatient);

module.exports = router;
