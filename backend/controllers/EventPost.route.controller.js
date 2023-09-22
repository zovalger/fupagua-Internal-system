const FupaguaEmpleado = require("../models/FupaguaEmpleado.model");
const EventPost = require("../models/EventPost.model");
const {
	createEventPost_Service,
	getEventPosts_Service,
	getEventPost_Service,
	updateEventPost_Service,
	deleteEventPost_Service,
	getCategories_Service,
} = require("../services/EventPost_Service");
const ActionsSystem = require("../services/ActionSystemService");

// ****************************************************************************
// 										creacion de registro
// ****************************************************************************

const createEventPost_RouteController = async (req, res) => {
	const { title, description, toDate, link } = req.body;

	let img = null;

	try {
		img = req.files.img;
	} catch (error) {
		console.log("no se proporsiono imagen del post");
	}

	try {
		const newEventPost = await createEventPost_Service(
			{ title, description, toDate, link },
			img
		);

		await ActionsSystem.eventPostCreate(req.user, newEventPost);

		return res.json(newEventPost);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

// ****************************************************************************
// 										obtencion de varios paciente con busqueda incluida
// ****************************************************************************

const getEventPosts_RouteController = async (req, res) => {
	try {
		const EventPost = await getEventPosts_Service(req.query);
		return res.json(EventPost);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// ****************************************************************************
// 										obtencion de un solo paciente
// ****************************************************************************

const getEventPost_RouteController = async (req, res) => {
	const { id } = req.params;
	try {
		const EventPost = await getEventPost_Service(id);

		if (!EventPost) return res.status(404).json({ message: "no found" });

		res.json(EventPost);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updateEventPost_RouteController = async (req, res) => {
	const { id } = req.params;
	const { title, description, toDate, link } = req.body;

	let img = null;

	try {
		img = req.files.img;
	} catch (error) {
		console.log("no se proporsiono imagen del post");
	}

	try {
		const updateEventPost = await updateEventPost_Service(
			id,
			{ title, description, toDate, link },
			img
		);

		if (!updateEventPost) return res.status(404).json({ message: "not found" });


		await ActionsSystem.eventPostUpdate(req.user, updateEventPost);

		return res.json(updateEventPost);
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

const deleteEventPost_RouteController = async (req, res) => {
	const { id } = req.params;

	const eventPost = await deleteEventPost_Service(id);

	if (!eventPost) return res.status(404).json(eventPost);


	await ActionsSystem.eventPostDelete(req.user, eventPost);

	return res.json(eventPost);
};

module.exports = {
	createEventPost_RouteController,
	getEventPosts_RouteController,
	getEventPost_RouteController,
	updateEventPost_RouteController,
	deleteEventPost_RouteController,
};
