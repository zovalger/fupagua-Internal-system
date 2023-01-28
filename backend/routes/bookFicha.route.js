const express = require("express");
const router = express.Router();

const {
	getBooksFicha,
	updateBookFicha,
	getBookFicha,
} = require("../controllers/BookFicha.route.controller");

// crear una nueva actividad
// router.post("/", createBook);

// obtener todas las actividades
router.get("/", getBooksFicha);

// buscar una actividad
router.get("/:id", getBookFicha);

// moduficar una actividad
router.put("/:id", updateBookFicha);

// eliminar una actividad
// router.delete("/:id", deleteBook);
// router.delete("/:id", patientMoveToTrash);

module.exports = router;
