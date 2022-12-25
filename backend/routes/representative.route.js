const express = require("express");
const router = express.Router();

const {
	createRepresentative,
	getRepresentative,
	getRepresentativeInTrash,
	getRepresentatives,
	jointRepresentativeWithPatient,
	representativeMoveToTrash,
	updateRepresentative,
	deleteRepresentativeInTrash,
} = require("../controllers/representative.route.controller");

// datos eliminados
router.get("/trash", getRepresentativeInTrash);
router.delete("/trash/:id", deleteRepresentativeInTrash);

// obtener datos
router.get("/", getRepresentatives);
router.get("/:id", getRepresentative);

// crear datos
router.post("/", createRepresentative);

// modificar datos
router.put("/:id", updateRepresentative);
router.post("/:id/join-to/:patientId", jointRepresentativeWithPatient);
router.delete("/:id", representativeMoveToTrash);

module.exports = router;
