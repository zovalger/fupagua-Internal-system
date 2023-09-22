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
router.get("/", authUser, getRepresentatives);
router.get("/:id", authUser, getRepresentative);

// crear datos
router.post("/", authUser, createRepresentative);

// modificar datos
router.put("/:id", authUser, updateRepresentative);
router.put("/:id/join-to/:patientId", authUser, jointRepresentativeWithPatient);
router.put(
	"/:id/unjoin-to/:patientId",
	authUser,
	unjointRepresentativeWithPatient
);

router.delete("/:id", authUser, deleteRepresentative);

module.exports = router;
