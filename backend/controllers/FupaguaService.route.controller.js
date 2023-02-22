const FupaguaEmpleado = require("../models/FupaguaEmpleado");
const FupaguaService = require("../models/FupaguaService");
const {
	createVideoLink_Service,
	getVideoLinks_Service,
	getVideoLink_Service,
	updateVideoLink_Service,
	deleteVideoLink_Service,
	getCategories_Service,
} = require("../services/VideoLinkService");

// ****************************************************************************
// 										creacion de registro
// ****************************************************************************

const createVideoLink_RouteController = async (req, res) => {

FupaguaEmpleado
FupaguaService

	const { videolink, category } = req.body;

	try {
		const newVideoLink = await createVideoLink_Service(videolink, category);

		return res.json(newVideoLink);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

// ****************************************************************************
// 										obtencion de varios paciente con busqueda incluida
// ****************************************************************************

const getVideoLinks_RouteController = async (req, res) => {
	try {
		const videoLink = await getVideoLinks_Service(req.query);
		return res.json(videoLink);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// ****************************************************************************
// 										obtencion de un solo paciente
// ****************************************************************************

const getVideoLink_RouteController = async (req, res) => {
	const { id } = req.params;
	try {
		const videoLink = await getVideoLink_Service(id);

		if (!videoLink) return res.status(404).json({ message: "no found" });

		res.json(videoLink);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};



// ****************************************************************************
// 										obtencion todas las categorias creadas
// ****************************************************************************

const getCategories_RouteController = async (req, res) => {
	// const { id } = req.params;
	try {
		const categories = await getCategories_Service();

		if (!categories) return res.status(404).json({ message: "no found" });

		res.json(categories);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updateVideoLink_RouteController = async (req, res) => {
	const { id } = req.params;
	const {videolink,category} = req.body;

	try {
		const updateVideoLink = await updateVideoLink_Service(id, videolink,category);

		if (!updateVideoLink) return res.status(404).json({ message: "not found" });

		return res.json(updateVideoLink);
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

const deleteVideoLink_RouteController = async (req, res) => {
	const { id } = req.params;

	const videoLink = await deleteVideoLink_Service(id);

	if (!videoLink) return res.status(404).json(videoLink);

	return res.json(videoLink);
};

module.exports = {
	createVideoLink_RouteController,
	getCategories_RouteController,
	getVideoLinks_RouteController,
	getVideoLink_RouteController,
	updateVideoLink_RouteController,
	deleteVideoLink_RouteController,
};
