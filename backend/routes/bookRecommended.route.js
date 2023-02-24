const express = require("express");
const router = express.Router();

// const { validateCreateBookRecommended } = require("../validators/patientsValidator");

const {
	getBookRecommendeds_RouteController,
	getBookRecommended_RouteController,
	createBookRecommended_RouteController,
	updateBookRecommended_RouteController,
	deleteBookRecommended_RouteController,
	getCategories_RouteController,
} = require("../controllers/BookRecommended.route.controller");

// obtener datos
router.get("/", getBookRecommendeds_RouteController);
router.get("/categories", getCategories_RouteController);
router.get("/:id", getBookRecommended_RouteController);

// crear datos
router.post("/", createBookRecommended_RouteController);

// modificar datos
router.put("/:id", updateBookRecommended_RouteController);

router.delete("/:id", deleteBookRecommended_RouteController);

module.exports = router;
