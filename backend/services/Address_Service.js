const AddressCiudades = require("../models/AddressCiudades.model");
const AddressEstado = require("../models/AddressEstado.model");
const AddressMunicipios = require("../models/AddressMunicipios.model");
const AddressParroquias = require("../models/AddressParroquias.model");

// ************************************************************
//                          estados
// ************************************************************

const getAllEstados_service = async () => {
	try {
		const estados = await AddressEstado.findAll({ order: ["estado"] });

		return estados;
	} catch (error) {
		console.log(error);
	}
};

const getEstado_service = async (id) => {
	try {
		console.log(id);
		const estado = await AddressEstado.findByPk(id);

		return estado;
	} catch (error) {
		console.log(error);
	}
};

// ************************************************************
//                          Municipios
// ************************************************************

const getAllMunicipios_service = async () => {
	try {
		const municipios = await AddressMunicipios.findAll({
			order: ["municipio"],
		});

		return municipios;
	} catch (error) {
		console.log(error);
	}
};

const getAllMunicipios_By_estado_service = async (id_estado) => {
	try {
		const municipios = await AddressMunicipios.findAll({
			where: { id_estado },
			order: ["municipio"],
		});

		return municipios;
	} catch (error) {
		console.log(error);
	}
};

const getMunicipio_service = async (id_municipio) => {
	try {
		const municipios = await AddressMunicipios.findByPk(id_municipio);

		return municipios;
	} catch (error) {
		console.log(error);
	}
};

// ************************************************************
//                          Ciudades
// ************************************************************

const getAllCiudades_service = async () => {
	try {
		const ciudades = await AddressCiudades.findAll({ order: ["ciudad"] });

		return ciudades;
	} catch (error) {
		console.log(error);
	}
};

const getCiudades_By_estado_service = async (id_estado) => {
	try {
		const ciudades = await AddressCiudades.findAll({
			where: { id_estado },
			order: ["ciudad"],
		});

		return ciudades;
	} catch (error) {
		console.log(error);
	}
};

const getCiudad_service = async (id_ciudad) => {
	try {
		const ciudad = await AddressCiudades.findByPk(id_ciudad);

		return ciudad;
	} catch (error) {
		console.log(error);
	}
};

// ************************************************************
//                          parroquias
// ************************************************************

const getAllParroquias_service = async () => {
	try {
		const parroquias = await AddressParroquias.findAll({
			order: ["parroquia"],
		});

		return parroquias;
	} catch (error) {
		console.log(error);
	}
};

const getAllParroquias_By_municipio_service = async (id_municipio) => {
	try {
		const parroquias = await AddressParroquias.findAll({
			where: { id_municipio },
			order: ["parroquia"],
		});

		return parroquias;
	} catch (error) {
		console.log(error);
	}
};

const getParroquia_service = async (id_parroquia) => {
	try {
		const parroquia = await AddressParroquias.findByPk(id_parroquia);

		return parroquia;
	} catch (error) {
		console.log(error);
	}
};

// ************************************************************
//                          CRUD de direcciones
// ************************************************************

const createAddress_service = async (
	id_estado,
	id_municipio,
	id_ciudad,
	id_parroquia,
	dir
) => {};

const getAddress_by_patient_service = async () => {};

const updateAddress_by_patient_service = async (
	id,
	id_estado,
	id_municipio,
	id_ciudad,
	id_parroquia,
	dir
) => {};

module.exports = {
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
	createAddress_service,
	getAddress_by_patient_service,
	updateAddress_by_patient_service,
};
