const FupaguaEmpleado = require("../models/FupaguaEmpleado.model");
const FupaguaService = require("../models/FupaguaService.model");
const {
	createFupaguaService_Service,
	getFupaguaServices_Service,
	getFupaguaService_Service,
	updateFupaguaService_Service,
	deleteFupaguaService_Service,
	getCategories_Service,
} = require("../services/FupaguaService_Service");

// ****************************************************************************
// 										creacion de registro
// ****************************************************************************

const createFupaguaService_RouteController = async (req, res) => {
	const { title, description } = req.body;

	let img = null;

	try {
		img = req.files.img;
	} catch (error) {
		console.log("no se proporsiono imagen del servicio");
	}

	try {
		const newFupaguaService = await createFupaguaService_Service(
			{ title, description },
			img
		);

		return res.json(newFupaguaService);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

// ****************************************************************************
// 										obtencion de varios paciente con busqueda incluida
// ****************************************************************************

const getFupaguaServices_RouteController = async (req, res) => {
	try {
		const fupaguaservice = await getFupaguaServices_Service(req.query);
		return res.json(fupaguaservice);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// ****************************************************************************
// 										obtencion de un solo paciente
// ****************************************************************************

const getFupaguaService_RouteController = async (req, res) => {
	const { id } = req.params;
	try {
		const fupaguaservice = await getFupaguaService_Service(id);

		if (!fupaguaservice) return res.status(404).json({ message: "no found" });

		res.json(fupaguaservice);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updateFupaguaService_RouteController = async (req, res) => {
	const { id } = req.params;
	const { title, description } = req.body;

	let img = null;

	try {
		img = req.files.img;
	} catch (error) {
		console.log("no se proporsiono imagen del servicio");
	}

	try {
		const updateFupaguaService = await updateFupaguaService_Service(
			id,
			{ title, description },
			img
		);

		if (!updateFupaguaService)
			return res.status(404).json({ message: "not found" });

		return res.json(updateFupaguaService);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// ****************************************************************************
// 				marcado como eliminado (cambio propidad estatus de registro)
// ****************************************************************************

// la primera peticion marca como eliminado el registro
// en la segunda consulta se eliminara permanentemente de la base de datos

const deleteFupaguaService_RouteController = async (req, res) => {
	const { id } = req.params;

	const fupaguaservice = await deleteFupaguaService_Service(id);

	if (!fupaguaservice) return res.status(404).json(fupaguaservice);

	return res.json(fupaguaservice);
};

module.exports = {
	createFupaguaService_RouteController,
	getFupaguaServices_RouteController,
	getFupaguaService_RouteController,
	updateFupaguaService_RouteController,
	deleteFupaguaService_RouteController,
};
