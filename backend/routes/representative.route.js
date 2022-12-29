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
	unjointRepresentativeWithPatient,
	deleteRepresentative,
} = require("../controllers/representative.route.controller");

// datos eliminados
// router.get("/trash", getRepresentativeInTrash);
// router.delete("/trash/:id", deleteRepresentativeInTrash);

// obtener datos
router.get("/", getRepresentatives);
router.get("/:id", getRepresentative);

// crear datos
router.post("/", createRepresentative);

// modificar datos
router.put("/:id", updateRepresentative);
router.put("/:id/join-to/:patientId", jointRepresentativeWithPatient);
router.put("/:id/unjoin-to/:patientId", unjointRepresentativeWithPatient);


router.delete("/:id", deleteRepresentative);

module.exports = router;
