const express = require("express");
const router = express.Router();

const {
	createBook_RouteController,
	getBooks_RouteController,
	getBook_RouteController,
	updateBook_RouteController,
	deleteBook_RouteController,
} = require("../controllers/Book.route.controller");

// crear una nueva actividad
router.post("/", createBook_RouteController);

// obtener todas las actividades
router.get("/", getBooks_RouteController);

// buscar una actividad
router.get("/:id", getBook_RouteController);

// moduficar una actividad
router.put("/:id", updateBook_RouteController);

// eliminar una actividad
router.delete("/:id", deleteBook_RouteController);
// router.delete("/:id", patientMoveToTrash);

module.exports = router;
