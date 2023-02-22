const {
	createFupaguaEmpleado_Service,
	getFupaguaEmpleados_Service,
	getFupaguaEmpleado_Service,
	updateFupaguaEmpleado_Service,
	deleteFupaguaEmpleado_Service,
	getCategories_Service,
} = require("../services/FupaguaEmpleado_Service");

// ****************************************************************************
// 										creacion de registro
// ****************************************************************************

const createFupaguaEmpleado_RouteController = async (req, res) => {
	const { name, ci, FPV, email, description, fupaguaserviceId } = req.body;

	let img = null;

	try {
		img = req.files.img;
	} catch (error) {
		console.log("*******************************************************");
		console.log("no se proporciono imagen del empleado");
		console.log(error);
	}

	try {
		const newFupaguaEmpleado = await createFupaguaEmpleado_Service(
			{ name, ci, FPV, email, description, fupaguaserviceId },
			img
		);

		return res.json(newFupaguaEmpleado);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

// ****************************************************************************
// 										obtencion de varios paciente con busqueda incluida
// ****************************************************************************

const getFupaguaEmpleados_RouteController = async (req, res) => {
	try {
		const fupaguaempleado = await getFupaguaEmpleados_Service(req.query);
		return res.json(fupaguaempleado);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// ****************************************************************************
// 										obtencion de un solo paciente
// ****************************************************************************

const getFupaguaEmpleado_RouteController = async (req, res) => {
	const { id } = req.params;
	try {
		const fupaguaempleado = await getFupaguaEmpleado_Service(id);

		if (!fupaguaempleado) return res.status(404).json({ message: "no found" });

		res.json(fupaguaempleado);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updateFupaguaEmpleado_RouteController = async (req, res) => {
	const { id } = req.params;
	const { name, ci, FPV, email, description, fupaguaserviceId } = req.body;

	let img = null;

	try {
		img = req.files.img;
	} catch (error) {
		console.log("*******************************************************");
		console.log("no se proporciono imagen del empleado");
		console.log(error);
	}

	try {
		const updateFupaguaEmpleado = await updateFupaguaEmpleado_Service(
			id,
			{ name, ci, FPV, email, description, fupaguaserviceId },
			img
		);

		if (!updateFupaguaEmpleado)
			return res.status(404).json({ message: "not found" });

		return res.json(updateFupaguaEmpleado);
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

const deleteFupaguaEmpleado_RouteController = async (req, res) => {
	const { id } = req.params;

	const fupaguaempleado = await deleteFupaguaEmpleado_Service(id);

	if (!fupaguaempleado) return res.status(404).json(fupaguaempleado);

	return res.json(fupaguaempleado);
};

module.exports = {
	createFupaguaEmpleado_RouteController,
	getFupaguaEmpleados_RouteController,
	getFupaguaEmpleado_RouteController,
	updateFupaguaEmpleado_RouteController,
	deleteFupaguaEmpleado_RouteController,
};
