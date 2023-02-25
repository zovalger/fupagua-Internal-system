const axios = require("axios");
const { CLOUD_PAGE_URL, CLOUD_PAGE_SECRET_CODE_SYNC } = require("../config");
const Book = require("../models/Book.model");
const BookRecommended = require("../models/BookRecommended.model");
const BookRecommendedCategory = require("../models/BookRecommendedCategory.model");
const FupaguaEmpleado = require("../models/FupaguaEmpleado.model");
const FupaguaService = require("../models/FupaguaService.model");
const ImgFile = require("../models/ImgFile.model");
const VideoLink = require("../models/VideoLink.model");
const CategoryVideo = require("../models/VideoLinkCategory.model");

const syncVideolinks = async () => {
	const data = { CLOUD_PAGE_SECRET_CODE_SYNC };
	const url = `${CLOUD_PAGE_URL}/api/sync/videolink`;

	try {
		const noSubmited = await VideoLink.findAll({
			where: { status: "a", syncCloud: false },
		});

		if (noSubmited.length <= 0) return;

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
		await axios.post(url, data);

		console.log("Videolinks sincronizados");
	} catch (error) {
		console.log(error);
	}
};

const formatearDataServiceToSubmit = async (servicios) => {
	await Promise.all(
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
};

const syncFupaguaService = async () => {
	try {
		console.log("syncFupaguaService");
		const data = { CLOUD_PAGE_SECRET_CODE_SYNC };
		const url = `${CLOUD_PAGE_URL}/api/sync/fupaguaservice`;

		// verificar si hay registros que no se han subido

		const noSubmitedService = await FupaguaService.findAll({
			where: { status: "a", syncCloud: false },
		});

		const noSubmitedEmpleado = await FupaguaEmpleado.findAll({
			where: { status: "a", syncCloud: false },
		});

		if (noSubmitedService.length <= 0 && noSubmitedEmpleado.length <= 0) return;

		// formatear los datos

		const servicios = await FupaguaService.findAll({
			where: { status: "a" },
			include: [ImgFile, FupaguaEmpleado],
		});

		if (!servicios.length > 0) return console.log("no se envio");

		data.Services = await formatearDataServiceToSubmit(servicios);

		// subir los registros

		if (!CLOUD_PAGE_URL) return;
		console.log(data);
		await axios.post(url, data);

		// marcarlos como subidos
		const empleados = await FupaguaEmpleado.findAll({ status: "a" });

		await Promise.all(
			servicios.map(async (serv) => await serv.update({ syncCloud: true }))
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
	const url = `${CLOUD_PAGE_URL}/api/sync/book`;

	console.log("iniciando las sincronizacion de libros");

	try {
		const noSubmitedRecommended = await BookRecommended.findAll({
			where: { status: "a", syncCloud: false },
		});

		const noSubmitedBook = await Book.findAll({
			where: { status: "a", syncCloud: false },
		});

		if (noSubmitedRecommended.length <= 0 && noSubmitedBook.length <= 0) return;

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

			book.portada = book.portada.img_cloudinary_url;
			book.book_extra_img = book.book_extra_img.map(
				(img) => img.img_cloudinary_url
			);

			return book;
		});

		if (!CLOUD_PAGE_URL) return;

		console.log(data);

		const res = await axios.post(url, data);

		if (res.data.success) return;

		// todo: cambiar por una consulta de actualizacion
		await Promise.all(
			books.map(async (book) => await book.update({ syncCloud: true }))
		);

		console.log("libros sincronizados");
	} catch (error) {
		console.log(error);
	}
};

const syncAllDataWithCloudServer = async () => {
	console.log("iniciando sincronizacion con CloudServer");

	await syncVideolinks();

	await syncFupaguaService();

	await syncBook_and_RecommendedBook();
};

module.exports = {
	syncVideolinks,
	syncFupaguaService,
	syncAllDataWithCloudServer,
};
