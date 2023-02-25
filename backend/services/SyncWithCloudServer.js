const axios = require("axios");
const { CLOUD_PAGE_URL, CLOUD_PAGE_SECRET_CODE_SYNC } = require("../config");
const FupaguaEmpleado = require("../models/FupaguaEmpleado.model");
const FupaguaService = require("../models/FupaguaService.model");
const ImgFile = require("../models/ImgFile.model");
const VideoLink = require("../models/VideoLink.model");
const CategoryVideo = require("../models/VideoLinkCategory.model");

const syncVideolinks = async () => {
	const data = { CLOUD_PAGE_SECRET_CODE_SYNC };
	const url = `${CLOUD_PAGE_URL}/api/sync/videolink`;

	try {
		const videolinks = await VideoLink.findAll({
			where: { status: "a" },
			include: CategoryVideo,
		});

		data.videolinks = videolinks.map((v) => {
			const { id, url, title, description, createdAt, categoryvideo } = v;

			return {
				id,
				url,
				title,
				description,
				createdAt,
				category: categoryvideo.title,
			};
		});

		if (!CLOUD_PAGE_URL) return;

		console.log(data);
		// todo: poner url de la pagina
		await axios.post(url, data);
	} catch (error) {
		console.log(error);
	}
};

const verific = async () => {
	try {
		let enviar = true;
		const servicios = await FupaguaService.findAll({
			where: { status: "a" },
			include: [ImgFile, FupaguaEmpleado],
		});

		await Promise.all(
			servicios.map(async (service) => {
				if (!service.imgfile) return;

				if (!service.imgfile.img_cloudinary_url) return (enviar = false);

				await Promise.all(
					service.fupaguaempleados.map(async (e) => {
						const empleado = await FupaguaEmpleado.findByPk(e.id, {
							include: ImgFile,
						});

						if (!empleado.imgfile) return;

						if (!empleado.imgfile.img_cloudinary_url) return (enviar = false);
					})
				);
			})
		);

		if (!enviar)
			setTimeout(async () => {
				await syncFupaguaService();
			}, 3000);

		return enviar ? servicios : false;
	} catch (error) {
		console.log(error);
	}
};

const syncFupaguaService = async () => {
	try {
		console.log("syncFupaguaService");
		const data = { CLOUD_PAGE_SECRET_CODE_SYNC };
		const url = `${CLOUD_PAGE_URL}/api/sync/fupaguaservice`;

		const servicios = await verific();
		if (!servicios) return console.log("no se envio");

		data.Services = await Promise.all(
			servicios.map(async (service) => {
				const { id, title, description, imgfile, fupaguaempleados } = service;

				const empleados = await Promise.all(
					fupaguaempleados.map(async (e) => {
						const empleado = await FupaguaEmpleado.findByPk(e.id, {
							include: ImgFile,
						});
						const {
							id: ide,
							name,
							FPV,
							description: dese,
							email,
							imgfile: imgf,
						} = empleado;

						return {
							id: ide,
							name,
							FPV,
							description: dese,
							email,
							img: imgf ? imgf.img_cloudinary_url : "",
						};
					})
				);

				return {
					id,
					title,
					description,
					img: imgfile ? imgfile.img_cloudinary_url : "",
					empleados,
				};
			})
		);

		console.log("se estan enviando los datos");

		console.log(data);

		console.log(JSON.stringify(data));
		if (!CLOUD_PAGE_URL) return;

		console.log(data);
		await axios.post(url, data);
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	syncVideolinks,
	syncFupaguaService,
};
