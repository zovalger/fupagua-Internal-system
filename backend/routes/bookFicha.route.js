const express = require("express");
const router = express.Router();

const {
	getBooksFicha_RouteController,
	getBookFicha_RouteController,
	updateBookFicha_RouteController,
} = require("../controllers/BookFicha.route.controller");

// crear una nueva actividad
// router.post("/", createBook);

// obtener todas las actividades
router.get("/", getBooksFicha_RouteController);

// buscar una actividad
router.get("/:id", getBookFicha_RouteController);

// moduficar una actividad
router.put("/:id", updateBookFicha_RouteController);

// eliminar una actividad
// router.delete("/:id", deleteBook);
// router.delete("/:id", patientMoveToTrash);

module.exports = router;
