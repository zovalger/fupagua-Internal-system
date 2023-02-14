const { Op } = require("sequelize");
const VideoLink = require("../models/VideoLink.model");
const VideoLinkCategory = require("../models/VideoLinkCategory.model");

// ****************************************************************************
// 										adicion de un nuevo registro
// ****************************************************************************

const createVideoLink_Service = async (dataVideoLink, dataCategories) => {
	try {
		const videolink = await VideoLink.create(dataVideoLink);

		const videoCategories = [];

		for (const title of dataCategories) {
			const category = await VideoLinkCategory.findOrCreate({
				where: { title },
			});

			videoCategories.push(category[0]);
		}

		console.log(videoCategories);

		await videolink.setVideolinkcategories(videoCategories);

		return videolink;
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
	const id = patientId;

	try {
		const videolink = await VideoLink.findByPk(id, {
			include: VideoLinkCategory,
		});

		if (!videolink) return null;

		return videolink;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updateVideoLink_Service = async (
	videolinkId,
	dataVideoLink,
	dataCategories
) => {
	const data = dataVideoLink;
	const id = videolinkId;

	try {
		const videolink = await VideoLink.findByPk(id);

		await videolink.update(data);

		const videoCategories = [];

		for (const title of dataCategories) {
			const category = await VideoLinkCategory.findOrCreate({
				where: { title },
			});

			videoCategories.push(category[0]);
		}

		console.log(videoCategories);

		await videolink.setVideolinkcategories(videoCategories);

		return await videolink.reload();
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
	const id = videolinkId;

	const videolink = await VideoLink.findByPk(id);

	if (!videolink) return null;

	if (videolink.status === "a") {
		videolink.status = "d";
		await videolink.save();
		return videolink;
	} else {
		await videolink.destroy();
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
