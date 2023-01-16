const express = require("express");
const router = express.Router();

const {
	getBooks,
	createBook,
	getBook,
	updateBook,
	deleteBook,
} = require("../controllers/Book.route.controller");

// crear una nueva actividad
router.post("/", createBook);

// obtener todas las actividades
router.get("/", getBooks);

// buscar una actividad
router.get("/:id", getBook);

// moduficar una actividad
router.put("/:id", updateBook);

// eliminar una actividad
router.delete("/:id", deleteBook);
// router.delete("/:id", patientMoveToTrash);

module.exports = router;
