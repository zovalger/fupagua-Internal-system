const express = require("express");
const router = express.Router();

const {
	createBook_RouteController,
	getBooks_RouteController,
	getBook_RouteController,
	updateBook_RouteController,
	deleteBook_RouteController,
} = require("../controllers/Book.route.controller");
const { authUser } = require("../middleware/authUser");

// obtener todas las actividades
router.get("/", getBooks_RouteController);

// buscar una actividad
router.get("/:id", getBook_RouteController);

// crear una nueva actividad
router.post("/", authUser, createBook_RouteController);

// moduficar una actividad
router.put("/:id", authUser, updateBook_RouteController);

// eliminar una actividad
router.delete("/:id", authUser, deleteBook_RouteController);
// router.delete("/:id", patientMoveToTrash);

module.exports = router;
