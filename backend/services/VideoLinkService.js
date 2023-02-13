const { Op } = require("sequelize");
const VideoLink = require("../models/VideoLink.model");
const VideoLinkCategory = require("../models/VideoLinkCategory.model");

// ****************************************************************************
// 										adicion de un nuevo registro
// ****************************************************************************

const createVideoLink_Service = async (dataVideoLink, dataCategories) => {
	console.log(dataVideoLink);

	console.log(dataCategories);

	try {
		const videoLink = await VideoLink.create(dataVideoLink);

		const videoCategories = [];

		for (const title of dataCategories) {
			const category = await VideoLinkCategory.findOrCreate({
				where: { title },
			});

			videoCategories.push(category[0]);
		}

		console.log(videoCategories);

		await videoLink.setVideolinkcategories(videoCategories);

		return videoLink;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};

// ****************************************************************************
// 										obtencion todos los registros añadidos
// ****************************************************************************

const getVideoLinks_Service = async (query) => {
	try {
		// **************************** obtener todos los registros ****************************
		const videolink = await VideoLink.findAll({ include: VideoLinkCategory });

		return videolink;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										obtencion de un registro
// ****************************************************************************

const getVideoLink_Service = async (videolinkId) => {
	return console.log("video link get one");

	const id = patientId;

	try {
		const patient = await VideoLink.findByPk(id, { include: { all: true } });

		if (!patient) return null;

		return patient;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updateVideoLink_Service = async (videolinkId, dataVideoLink) => {
	return console.log("video link put");

	const data = dataVideoLink;
	const id = patientId;

	data.representative = undefined;
	dataRepresentative.id = undefined;
	try {
		const patient = await VideoLink.findByPk(id, { include: { all: true } });

		if (!patient) return;

		await patient.update(data);

		const representative = await Representative.findByPk(
			patient.representativeId
		);

		if (!representative) {
			console.log("no existe el representante");
			let newRepresentative = await Representative.create(dataRepresentative);
			await patient.setRepresentative(newRepresentative);
			await newRepresentative.addVideoLink(patient);

			return;
		}

		if (dataRepresentative.ci === representative.ci) {
			console.log("representante modificado");
			await representative.update(dataRepresentative);
		} else {
			console.log("cambio de representante");

			// primero vemos si esta en la base de datos
			let newRepresentative = await Representative.findOne({
				where: { ci: dataRepresentative.ci },
			});

			// quitamos el id para evitar conflictos
			const newDataRepresentative = dataRepresentative;

			// sino esta en la base de datos creamos un nuevo registro
			if (!newRepresentative)
				newRepresentative = await Representative.create(newDataRepresentative);

			// le asignamos el nuevo representante al paciente
			// si esta lo asignamos al paciente

			await patient.setRepresentative(newRepresentative);
			await newRepresentative.addVideoLink(patient);

			// si el viejo representante no tiene paciente se elimina

			await representative.removeVideoLink(patient);
			const num = await representative.countVideoLinks();

			console.log(num);

			if (num <= 0) await representative.destroy();
		}

		return patient;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 				marcado como eliminado (cambio propidad estatus de registro)
// ****************************************************************************

// la primera peticion marca como eliminado el registro
// en la segunda consulta se eliminara permanentemente de la base de datos

const deleteVideoLink_Service = async (videolinkId) => {
	return console.log("video link delete");

	const id = patientId;

	const patient = await VideoLink.findByPk(id);

	if (!patient) return null;

	if (patient.status === "a") {
		patient.status = "d";
		await patient.save();
		return patient;
	} else {
		await patient.destroy();
		return { message: "eliminado" };
	}
};

module.exports = {
	createVideoLink_Service,
	getVideoLink_Service,
	getVideoLinks_Service,
	updateVideoLink_Service,
	deleteVideoLink_Service,
};
