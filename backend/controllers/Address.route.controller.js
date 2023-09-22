const AddressEstado = require("../models/AddressEstado.model");
const {
	getAllEstados_service,
	getEstado_service,
	getAllMunicipios_service,
	getAllMunicipios_By_estado_service,
	getMunicipio_service,
	getAllCiudades_service,
	getCiudades_By_estado_service,
	getCiudad_service,
	getAllParroquias_service,
	getAllParroquias_By_municipio_service,
	getParroquia_service,
} = require("../services/Address_Service");

// ************************************************************
//                          estados
// ************************************************************

const getAllEstados_controller = async (req, res) => {
	try {
		const estados = await getAllEstados_service();

		if (!estados) return res.status(404).send(estados);

		return res.json(estados);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

const getEstado_controller = async (req, res) => {
	try {
		const { id_estado } = req.params;

		const estado = await getEstado_service(id_estado);

		if (!estado) return res.status(404).send(estado);

		return res.json(estado);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

// ************************************************************
//                          Municipios
// ************************************************************

const getAllMunicipios_controller = async (req, res) => {
	try {
		const municipios = await getAllMunicipios_service();

		if (!municipios) return res.status(404).send(municipios);

		return res.json(municipios);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

const getAllMunicipios_By_estado_controller = async (req, res) => {
	try {
		const { id_estado } = req.params;

		const municipios = await getAllMunicipios_By_estado_service(id_estado);

		if (!municipios) return res.status(404).send(municipios);

		return res.json(municipios);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

const getMunicipio_controller = async (req, res) => {
	try {
		const { id_municipio } = req.params;

		const municipio = await getMunicipio_service(id_municipio);

		if (!municipio) return res.status(404).send(municipio);

		return res.json(municipio);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

// ************************************************************
//                          Ciudades
// ************************************************************

const getAllCiudades_controller = async (req, res) => {
	try {
		const ciudades = await getAllCiudades_service();

		if (!ciudades) return res.status(404).send(ciudades);

		return res.json(ciudades);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

const getCiudades_By_estado_controller = async (req, res) => {
	try {
		const { id_estado } = req.params;

		const ciudades = await getCiudades_By_estado_service(id_estado);

		if (!ciudades) return res.status(404).send(ciudades);

		return res.json(ciudades);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

const getCiudad_controller = async (req, res) => {
	try {
		const { id_ciudad } = req.params;

		const ciudad = await getCiudad_service(id_ciudad);

		if (!ciudad) return res.status(404).send(ciudad);

		return res.json(ciudad);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

// ************************************************************
//                          parroquias
// ************************************************************

const getAllParroquias_controller = async (req, res) => {
	try {
		const parroquias = await getAllParroquias_service();

		if (!parroquias) return res.status(404).send(parroquias);

		return res.json(parroquias);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

const getAllParroquias_By_municipio_controller = async (req, res) => {
	try {
		const { id_municipio } = req.params;

		const parroquias = await getAllParroquias_By_municipio_service(
			id_municipio
		);

		if (!parroquias) return res.status(404).send(parroquias);

		return res.json(parroquias);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

const getParroquia_controller = async (req, res) => {
	try {
		const { id_parroquia } = req.params;

		const parroquia = await getParroquia_service(id_parroquia);

		if (!parroquia) return res.status(404).send(parroquia);

		return res.json(parroquia);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

// ************************************************************
//                          CRUD de direcciones
// ************************************************************

// const createAddress_controller = async (req,res)  => {

// 	const {id_estado,
// 		id_municipio,
// 		id_ciudad,
// 		id_parroquia,
// 		dir}

// };

// const getAddress_by_patient_controller = async (req,res) => {};

// const updateAddress_by_patient_controller = async (
// 	id,
// 	id_estado,
// 	id_municipio,
// 	id_ciudad,
// 	id_parroquia,
// 	dir
// ) => {};

module.exports = {
	getAllEstados_controller,
	getEstado_controller,
	getAllMunicipios_controller,
	getAllMunicipios_By_estado_controller,
	getMunicipio_controller,
	getAllCiudades_controller,
	getCiudades_By_estado_controller,
	getCiudad_controller,
	getAllParroquias_controller,
	getAllParroquias_By_municipio_controller,
	getParroquia_controller,
};
