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


// obtener datos
router.get("/", getFupaguaEmpleados_RouteController);
router.get("/:id", getFupaguaEmpleado_RouteController);

// crear datos
router.post("/", createFupaguaEmpleado_RouteController);

// modificar datos
router.put("/:id", updateFupaguaEmpleado_RouteController);

router.delete("/:id", deleteFupaguaEmpleado_RouteController);

module.exports = router;
