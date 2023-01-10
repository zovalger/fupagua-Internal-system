const express = require("express");
const router = express.Router();

const {
	getActivitys,
	createActivity,
	getActivity,
	updateActivity,
	deleteActivity,
} = require("../controllers/Activity.route.controller");

// crear una nueva actividad
router.post("/", createActivity);

// obtener todas las actividades
router.get("/", getActivitys);

// buscar una actividad
router.get("/:id", getActivity);

// moduficar una actividad
router.put("/:id", updateActivity);

// eliminar una actividad
router.delete("/:id", deleteActivity);
// router.delete("/:id", patientMoveToTrash);

module.exports = router;
