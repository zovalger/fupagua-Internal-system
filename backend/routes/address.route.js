const express = require("express");
const {
	getAllEstados_controller,
	getEstado_controller,
	getMunicipio_controller,
	getAllMunicipios_By_estado_controller,
	getAllCiudades_controller,
	getCiudad_controller,
	getAllMunicipios_controller,
	getCiudades_By_estado_controller,
	getAllParroquias_controller,
	getParroquia_controller,
	getAllParroquias_By_municipio_controller,
} = require("../controllers/Address.route.controller");
const { authUser } = require("../middleware/authUser");
const router = express.Router();

// estados
router.get("/estados", authUser, getAllEstados_controller);
router.get("/estados/:id_estado", authUser, getEstado_controller);
router.get(
	"/estados/:id_estado/municipios",
	authUser,
	getAllMunicipios_By_estado_controller
);
router.get(
	"/estados/:id_estado/ciudades",
	authUser,
	getCiudades_By_estado_controller
);

// municipios

router.get("/municipios", authUser, getAllMunicipios_controller);
router.get("/municipios/:id_municipio", authUser, getMunicipio_controller);
router.get(
	"/municipios/:id_municipio/parroquias",
	authUser,
	getAllParroquias_By_municipio_controller
);

// ciudades

router.get("/ciudades", authUser, getAllCiudades_controller);
router.get("/ciudades/:id_ciudad", authUser, getCiudad_controller);

// parroquias

router.get("/parroquias", authUser, getAllParroquias_controller);
router.get("/parroquias/:id_parroquia", authUser, getParroquia_controller);

module.exports = router;
