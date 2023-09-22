const express = require("express");
const router = express.Router();

// const { validateCreateFupaguaEmpleado } = require("../validators/patientsValidator");

const {
	getFupaguaEmpleados_RouteController,
	getFupaguaEmpleado_RouteController,
	createFupaguaEmpleado_RouteController,
	updateFupaguaEmpleado_RouteController,
	deleteFupaguaEmpleado_RouteController,
} = require("../controllers/FupaguaEmpleado.route.controller");

const {
	validateFupaguaEmpleadoData,
} = require("../validators/landingEdit/fupaguaEmpleadoValidator");
const { authUser } = require("../middleware/authUser");

router.get("/:id", authUser, getFupaguaEmpleado_RouteController);
router.put(
	"/:id",
	authUser,
	validateFupaguaEmpleadoData,
	updateFupaguaEmpleado_RouteController
);

router.delete("/:id", authUser, deleteFupaguaEmpleado_RouteController);

router.get("/", authUser, getFupaguaEmpleados_RouteController);
router.post(
	"/",
	authUser,
	validateFupaguaEmpleadoData,
	createFupaguaEmpleado_RouteController
);

module.exports = router;
