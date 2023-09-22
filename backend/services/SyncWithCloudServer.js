const axios = require("axios");
const { Op } = require("sequelize");
const { CLOUD_PAGE_URL, CLOUD_PAGE_SECRET_CODE_SYNC } = require("../config");
const Book = require("../models/Book.model");
const BookRecommended = require("../models/BookRecommended.model");
const BookRecommendedCategory = require("../models/BookRecommendedCategory.model");
const EventPost = require("../models/EventPost.model");
const FupaguaEmpleado = require("../models/FupaguaEmpleado.model");
const FupaguaService = require("../models/FupaguaService.model");
const ImgFile = require("../models/ImgFile.model");
const VideoLink = require("../models/VideoLink.model");
const CategoryVideo = require("../models/VideoLinkCategory.model");

const syncVideolinks = async () => {
	const data = { CLOUD_PAGE_SECRET_CODE_SYNC };
	const url = `${CLOUD_PAGE_URL}/api/sync/videolink`;

	try {
		const noSubmitedDelete = await VideoLink.findAll({
			where: { status: "d", syncCloud: false },
		});

		const noSubmited = await VideoLink.findAll({
			where: { status: "a", syncCloud: false },
		});

		if (noSubmitedDelete.length <= 0 && noSubmited.length <= 0) return;

		console.log("iniciando las sincronizacion de Videolinks");

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
		const res = await axios.post(url, data);

		if (!res.data.success) return;

		console.log("Videolinks sincronizados");

		await VideoLink.update(
			{ syncCloud: true },
			{ where: { status: "d", syncCloud: false } }
		);

		const categoryvideoIds = [];
		await Promise.all(
			videolinks.map(async (v) => {
				categoryvideoIds.push(v.categoryvideoId);
				await v.update({ syncCloud: true });
			})
		);

		await CategoryVideo.update(
			{ syncCloud: true },
			{
				where: {
					id: {
						[Op.in]: categoryvideoIds,
					},
				},
			}
		);
	} catch (error) {
		console.log(error);
	}
};

const formatearDataServiceToSubmit = async (services) => {
	try {
		return await Promise.all(
			services.map(async (service) => {
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
	} catch (error) {
		console.log(error);
	}
};

const syncFupaguaService = async () => {
	try {
		const data = { CLOUD_PAGE_SECRET_CODE_SYNC };
		const url = `${CLOUD_PAGE_URL}/api/sync/fupaguaservice`;

		// verificar si hay registros que no se han subido

		const noSubmitedDeleteService = await FupaguaService.findAll({
			where: { status: "d", syncCloud: false },
		});

		// console.log(noSubmitedDeleteService);

		const noSubmitedService = await FupaguaService.findAll({
			where: { status: "a", syncCloud: false },
		});

		const noSubmitedEmpleado = await FupaguaEmpleado.findAll({
			where: { status: "a", syncCloud: false },
		});

		if (
			noSubmitedDeleteService.length <= 0 &&
			noSubmitedService.length <= 0 &&
			noSubmitedEmpleado.length <= 0
		)
			return;

		// formatear los datos

		console.log("inicio de de sincronizacion de los services y empleados");

		const services = await FupaguaService.findAll({
			where: { status: "a" },
			include: [ImgFile, FupaguaEmpleado],
		});

		if (!services.length > 0) return console.log("no hay services");

		data.Services = await formatearDataServiceToSubmit(services);

		if (!data.Services) return console.log("no hay services para sincronizar");
		// subir los registros

		if (!CLOUD_PAGE_URL) return console.log("no hay una url del cloud-server");

		console.log(data);

		const res = await axios.post(url, data);

		if (!res.data.success) return;

		console.log("services y empleados sincronizados");

		// marcarlos como subidos
		const empleados = await FupaguaEmpleado.findAll({ status: "a" });

		await FupaguaService.update(
			{ syncCloud: true },
			{ where: { status: "d", syncCloud: false } }
		);

		await Promise.all(
			services.map(async (serv) => await serv.update({ syncCloud: true }))
		);

		await Promise.all(
			empleados.map(async (emp) => await emp.update({ syncCloud: true }))
		);
	} catch (error) {
		console.log(error);
	}
};

// sincronizar libros recomendados

const syncBook_and_RecommendedBook = async () => {
	const data = { CLOUD_PAGE_SECRET_CODE_SYNC };
	const url = `${CLOUD_PAGE_URL}/api/sync/books`;

	try {
		const noSubmitedDeleteRecommended = await BookRecommended.findAll({
			where: { status: "d", syncCloud: false },
		});
		const noSubmitedRecommended = await BookRecommended.findAll({
			where: { status: "a", syncCloud: false },
		});

		const noSubmitedBook = await Book.findAll({
			where: { status: "a", syncCloud: false },
		});

		if (
			noSubmitedDeleteRecommended.length <= 0 &&
			noSubmitedRecommended.length <= 0 &&
			noSubmitedBook.length <= 0
		)
			return;

		console.log("iniciando las sincronizacion de libros");

		const recommended = await BookRecommended.findAll({
			where: { status: "a" },
			include: [BookRecommendedCategory],
		});

		const books = await Book.findAll({
			where: { status: "a" },
			include: [
				{ model: ImgFile, as: "portada" },
				{ model: ImgFile, as: "book_extra_img" },
			],
		});

		booksPlane = JSON.parse(JSON.stringify(books));

		data.books = await booksPlane.map((book) => {
			// anadir los atributos category y recommended
			recommended.map(({ bookId, bookrecommendedcategory }) => {
				if (bookId != book.id) return;

				book.category = bookrecommendedcategory.title;
				book.recommended = true;
			});

			// formatear las imagenes

			book.portada = book.portada ? book.portada.img_cloudinary_url : null;
			book.book_extra_img = book.book_extra_img.map(
				(img) => img.img_cloudinary_url
			);

			return book;
		});

		if (!CLOUD_PAGE_URL) return;

		const res = await axios.post(url, data);

		if (!res.data.success) return;

		await BookRecommended.update(
			{ syncCloud: true },
			{ where: { status: "d", syncCloud: false } }
		);

		// todo: cambiar por una sola consulta de actualizacion
		await Promise.all(
			books.map(async (book) => await book.update({ syncCloud: true }))
		);

		// todo: cambiar por una sola consulta de actualizacion
		await Promise.all(
			recommended.map(async (r) => await r.update({ syncCloud: true }))
		);

		console.log("libros sincronizados");
	} catch (error) {
		console.log(error);
	}
};

const syncEventPost = async () => {
	try {
		const data = { CLOUD_PAGE_SECRET_CODE_SYNC };
		const url = `${CLOUD_PAGE_URL}/api/sync/eventpost`;

		// verificar si hay registros que no se han subido

		const noSubmitedEventPost = await EventPost.findAll({
			where: { syncCloud: false },
		});

		// console.log(noSubmitedEventPost);

		if (noSubmitedEventPost.length <= 0) return;

		// formatear los datos

		console.log("inicio de de sincronizacion de los post de eventos");

		const eventPost = await EventPost.findAll({
			where: { status: "a" },
			include: [ImgFile],
		});

		// console.log(eventPost);

		if (eventPost.length <= 0) return console.log("no hay eventos");

		data.EventPost = eventPost.map((evp) => {
			const { title, description, imgfile, createdAt, link, toDate } = evp;

			return {
				title,
				description,
				link,
				toDate,
				createdAt,
				img: imgfile ? imgfile.img_cloudinary_url : null,
			};
		});

		if (!data.EventPost) return console.log("no hay eventos para sincronizar");
		// subir los registros

		if (!CLOUD_PAGE_URL) return console.log("no hay una url del cloud-server");

		// console.log(data);

		const res = await axios.post(url, data);

		if (!res.data.success) return;

		console.log("eventos sincronizados");

		await EventPost.update(
			{ syncCloud: true },
			{ where: { syncCloud: false } }
		);
	} catch (error) {
		console.log(error);
	}
};

const syncAllDataWithCloudServer = async () => {
	await syncVideolinks();

	await syncFupaguaService();

	await syncBook_and_RecommendedBook();

	await syncEventPost();
};

module.exports = {
	syncVideolinks,
	syncFupaguaService,
	syncAllDataWithCloudServer,
};
