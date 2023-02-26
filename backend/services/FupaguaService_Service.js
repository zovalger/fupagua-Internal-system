const { Op } = require("sequelize");
const FupaguaService = require("../models/FupaguaService.model");
const ImgFile = require("../models/ImgFile.model");
const { markToDeleteImgFile } = require("./ImageService");

// ****************************************************************************
// 										adicion de un nuevo registro
// ****************************************************************************

const createFupaguaService_Service = async (
	dataFupaguaService,
	imgFupaguaService
) => {
	try {
		const fupaguaservice = await FupaguaService.create(dataFupaguaService);

		if (imgFupaguaService) {
			const imgfile = await ImgFile.create({
				img_local_url_original: imgFupaguaService.tempFilePath,
			});
			await fupaguaservice.setImgfile(imgfile);
		}

		// await syncFupaguaService();

		return fupaguaservice;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};

// ****************************************************************************
// 										obtencion todos los registros añadidos
// ****************************************************************************

const getFupaguaServices_Service = async (query) => {
	try {
		// **************************** obtener todos los registros ****************************
		const fupaguaservice = await FupaguaService.findAll({
			where: { status: "a" },
			include: ImgFile,
		});

		return fupaguaservice;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										obtencion de un registro
// ****************************************************************************

const getFupaguaService_Service = async (fupaguaserviceId) => {
	const id = fupaguaserviceId;

	try {
		const fupaguaservice = await FupaguaService.findByPk(id, {
			include: ImgFile,
		});

		if (!fupaguaservice) return null;

		return fupaguaservice;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updateFupaguaService_Service = async (
	fupaguaserviceId,
	dataFupaguaService,
	imgFupaguaService
) => {
	const data = dataFupaguaService;
	const id = fupaguaserviceId;

	data.syncCloud = false;

	try {
		const fupaguaservice = await FupaguaService.findByPk(id);

		await fupaguaservice.update(data);

		if (imgFupaguaService) {
			if (fupaguaservice.imgfileId)
				await markToDeleteImgFile(fupaguaservice.imgfileId);

			const imgfile = await ImgFile.create({
				img_local_url_original: imgFupaguaService.tempFilePath,
			});

			await fupaguaservice.setImgfile(imgfile);
		}

		// await syncFupaguaService();

		return await fupaguaservice.reload();
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

const deleteFupaguaService_Service = async (fupaguaserviceId) => {
	const id = fupaguaserviceId;

	const fupaguaservice = await FupaguaService.findByPk(id);

	if (!fupaguaservice) return null;

	if (fupaguaservice.status === "a") {
		return await fupaguaservice.update({ status: "d", syncCloud: false });
	} else {
		await fupaguaservice.destroy();
		return { message: "eliminado" };
	}
};

module.exports = {
	createFupaguaService_Service,
	getFupaguaService_Service,
	getFupaguaServices_Service,
	updateFupaguaService_Service,
	deleteFupaguaService_Service,
};
