const { Op } = require("sequelize");
const EventPost = require("../models/EventPost.model");
const ImgFile = require("../models/ImgFile.model");
const { markToDeleteImgFile } = require("./ImageService");

// ****************************************************************************
// 										adicion de un nuevo registro
// ****************************************************************************

const createEventPost_Service = async (dataEventPost, imgEventPost) => {
	try {
		const eventPost = await EventPost.create(dataEventPost);

		if (imgEventPost) {
			const imgfile = await ImgFile.create({
				img_local_url_original: imgEventPost.tempFilePath,
				width: 1200,
			});
			await eventPost.setImgfile(imgfile);
		}

		return eventPost;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};

// ****************************************************************************
// 										obtencion todos los registros añadidos
// ****************************************************************************

const getEventPosts_Service = async (query) => {
	try {
		// **************************** obtener todos los registros ****************************
		const eventPost = await EventPost.findAll({
			where: { status: "a" },
			include: ImgFile,
		});

		return eventPost;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										obtencion de un registro
// ****************************************************************************

const getEventPost_Service = async (eventPostId) => {
	const id = eventPostId;

	try {
		const eventPost = await EventPost.findByPk(id, {
			include: ImgFile,
		});

		if (!eventPost) return null;

		return eventPost;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updateEventPost_Service = async (
	eventPostId,
	dataEventPost,
	imgEventPost
) => {
	const data = dataEventPost;
	const id = eventPostId;

	data.syncCloud = false;

	try {
		const eventPost = await EventPost.findByPk(id);

		await eventPost.update(data);

		if (imgEventPost) {
			if (eventPost.imgfileId) await markToDeleteImgFile(eventPost.imgfileId);

			const imgfile = await ImgFile.create({
				img_local_url_original: imgEventPost.tempFilePath,
				width: 1200,
			});

			await eventPost.setImgfile(imgfile);
		}

		// await syncEventPost();

		return await eventPost.reload();
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

const deleteEventPost_Service = async (eventPostId) => {
	try {
		const id = eventPostId;

		const eventPost = await EventPost.findByPk(id);

		if (!eventPost) return null;

		if (eventPost.status === "a") {
			return await eventPost.update({ status: "d", syncCloud: false });
		} else {
			await eventPost.destroy();
			return { message: "eliminado" };
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	createEventPost_Service,
	getEventPost_Service,
	getEventPosts_Service,
	updateEventPost_Service,
	deleteEventPost_Service,
};
