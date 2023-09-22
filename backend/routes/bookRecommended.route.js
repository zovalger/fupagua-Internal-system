const express = require("express");
const router = express.Router();

const {
	getBookRecommendeds_RouteController,
	getBookRecommended_RouteController,
	createBookRecommended_RouteController,
	updateBookRecommended_RouteController,
	deleteBookRecommended_RouteController,
	getCategories_RouteController,
} = require("../controllers/BookRecommended.route.controller");

const {
	validateBookRecommendedData,
} = require("../validators/landingEdit/bookRecommendedValidator");

const { authUser } = require("../middleware/authUser");

router.get("/categories", authUser, getCategories_RouteController);

router.get("/:id", authUser, getBookRecommended_RouteController);
router.put(
	"/:id",
	authUser,
	validateBookRecommendedData,
	updateBookRecommended_RouteController
);
router.delete("/:id", authUser, deleteBookRecommended_RouteController);

router.get("/", authUser, getBookRecommendeds_RouteController);
router.post(
	"/",
	authUser,
	validateBookRecommendedData,
	createBookRecommended_RouteController
);

module.exports = router;
