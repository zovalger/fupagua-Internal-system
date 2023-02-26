const { Op } = require("sequelize");
const FupaguaEmpleado = require("../models/FupaguaEmpleado.model");
const FupaguaService = require("../models/FupaguaService.model");
const ImgFile = require("../models/ImgFile.model");
const { markToDeleteImgFile } = require("./ImageService");
const { syncFupaguaService } = require("./SyncWithCloudServer");

// ****************************************************************************
// 										adicion de un nuevo registro
// ****************************************************************************

const createFupaguaEmpleado_Service = async (
	dataFupaguaEmpleado,
	imgFupaguaEmpleado
) => {
	try {
		const fupaguaempleado = await FupaguaEmpleado.create(dataFupaguaEmpleado);

		if (imgFupaguaEmpleado) {
			const imgfile = await ImgFile.create({
				img_local_url_original: imgFupaguaEmpleado.tempFilePath,
			});
			await fupaguaempleado.setImgfile(imgfile);
		}

		// await syncFupaguaService();

		return fupaguaempleado;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};

// ****************************************************************************
// 										obtencion todos los registros añadidos
// ****************************************************************************

const getFupaguaEmpleados_Service = async (query) => {
	try {
		// **************************** obtener todos los registros ****************************
		const fupaguaempleado = await FupaguaEmpleado.findAll({
			where: { status: "a" },
			include: [ImgFile, FupaguaService],
		});

		return fupaguaempleado;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										obtencion de un registro
// ****************************************************************************

const getFupaguaEmpleado_Service = async (fupaguaempleadoId) => {
	const id = fupaguaempleadoId;

	try {
		const fupaguaempleado = await FupaguaEmpleado.findByPk(id, {
			include: [ImgFile, FupaguaService],
		});

		if (!fupaguaempleado) return null;

		return fupaguaempleado;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updateFupaguaEmpleado_Service = async (
	fupaguaempleadoId,
	dataFupaguaEmpleado,
	imgFupaguaEmpleado
) => {
	const data = dataFupaguaEmpleado;
	const id = fupaguaempleadoId;

	data.syncCloud = false;

	try {
		const fupaguaempleado = await FupaguaEmpleado.findByPk(id);

		await fupaguaempleado.update(data);

		if (imgFupaguaEmpleado) {
			if (fupaguaempleado.imgfileId)
				await markToDeleteImgFile(fupaguaempleado.imgfileId);

			const imgfile = await ImgFile.create({
				img_local_url_original: imgFupaguaEmpleado.tempFilePath,
			});

			await fupaguaempleado.setImgfile(imgfile);
		}

		// await syncFupaguaService();

		return await fupaguaempleado.reload();
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

const deleteFupaguaEmpleado_Service = async (fupaguaempleadoId) => {
	const id = fupaguaempleadoId;

	const fupaguaempleado = await FupaguaEmpleado.findByPk(id);

	if (!fupaguaempleado) return null;

	if (fupaguaempleado.status === "a") {
		// await syncFupaguaService();
		return await fupaguaempleado.update({ status: "d", syncCloud: false });
	}

	// await syncFupaguaService();
	await fupaguaempleado.destroy();

	return { message: "eliminado" };
};

module.exports = {
	createFupaguaEmpleado_Service,
	getFupaguaEmpleado_Service,
	getFupaguaEmpleados_Service,
	updateFupaguaEmpleado_Service,
	deleteFupaguaEmpleado_Service,
};
