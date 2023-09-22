const express = require("express");
const router = express.Router();

const {
	getBooksFicha_RouteController,
	getBookFicha_RouteController,
	updateBookFicha_RouteController,
} = require("../controllers/BookFicha.route.controller");
const { authUser } = require("../middleware/authUser");

router.get("/", getBooksFicha_RouteController);

router.get("/:id", getBookFicha_RouteController);

router.put("/:id" ,authUser, updateBookFicha_RouteController);

// router.delete("/:id", deleteBook);
// router.delete("/:id", patientMoveToTrash);

module.exports = router;
