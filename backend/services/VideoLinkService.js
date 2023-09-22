const { Op } = require("sequelize");
const VideoLink = require("../models/VideoLink.model");
const VideoLinkCategory = require("../models/VideoLinkCategory.model");
const { getVideoId } = require("../utils/formateToEmbeLinkYotube");
// const { syncVideolinks } = require("./SyncWithCloudServer");

// ****************************************************************************
// 										adicion de un nuevo registro
// ****************************************************************************

const createVideoLink_Service = async (dataVideoLink, dataCategory) => {
	try {
		// todo: ver si ya esta agregado

		const videolink = await VideoLink.create(dataVideoLink);

		const category = await VideoLinkCategory.findOrCreate({
			where: { title: dataCategory },
		});

		await category[0].update({ title: dataCategory });

		if (category[0]) await videolink.setCategoryvideo(category[0]);

		// await syncVideolinks();

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
		const videolink = await VideoLink.findAll({
			where: { status: "a" },
			include: VideoLinkCategory,
		});

		return videolink;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										obtencion todos las categorias
// ****************************************************************************

const getCategories_Service = async (query) => {
	try {
		// **************************** obtener todos los registros ****************************
		const categories = await VideoLinkCategory.findAll({
			include: { model: VideoLink, where: { status: "a" } },
		});

		return categories.map((c) => {
			if (c.videolinks.length > 0) return c;
		});
	} catch (error) {
		console.log(error);
		return error;
	}
};

const verifyExistUrl_Service = async (url) => {
	const idUrl = getVideoId(url);

	try {
		const videolink = await VideoLink.findOne({
			where: { status: "a", url: { [Op.substring]: idUrl } },
			include: VideoLinkCategory,
		});

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
	const id = videolinkId;

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
	dataCategory
) => {
	const data = dataVideoLink;
	const id = videolinkId;
	data.syncCloud = false;

	try {
		const videolink = await VideoLink.findByPk(id);

		const category = await VideoLinkCategory.findOrCreate({
			where: { title: dataCategory },
		});

		await videolink.update(data);
		await category[0].update({ title: dataCategory });

		if (category[0]) await videolink.setCategoryvideo(category[0]);

		// await syncVideolinks();

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
	try {
		const id = videolinkId;

		const videolink = await VideoLink.findByPk(id);

		if (!videolink) return null;

		if (videolink.status === "a") {
			videolink.status = "d";
			videolink.syncCloud = false;

			await videolink.save();

			// await syncVideolinks();

			return videolink;
		} else {
			await videolink.destroy();
			return { message: "eliminado" };
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	createVideoLink_Service,
	getVideoLink_Service,
	getVideoLinks_Service,
	getCategories_Service,
	verifyExistUrl_Service,
	updateVideoLink_Service,
	deleteVideoLink_Service,
};
