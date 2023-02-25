const { Op } = require("sequelize");
const Book = require("../models/Book.model");
const BookRecommended = require("../models/BookRecommended.model");
const BookRecommendedCategory = require("../models/BookRecommendedCategory.model");
const { getBook_Service } = require("./BookService");
const { syncVideolinks } = require("./SyncWithCloudServer");

// ****************************************************************************
// 										adicion de un nuevo registro
// ****************************************************************************

const createBookRecommended_Service = async (
	dataBookRecommended,
	dataCategory
) => {
	try {
		const bookrecommended = await BookRecommended.create(dataBookRecommended);

		const category = await BookRecommendedCategory.findOrCreate({
			where: { title: dataCategory },
		});

		if (category[0])
			await bookrecommended.setBookrecommendedcategory(category[0]);

		// await syncVideolinks();

		return bookrecommended;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};

// ****************************************************************************
// 										obtencion todos los registros añadidos
// ****************************************************************************

const getBookRecommendeds_Service = async (query) => {
	try {
		// **************************** obtener todos los registros ****************************
		const booksrecommended = await BookRecommended.findAll({
			where: { status: "a" },
			include: [BookRecommendedCategory],
		});

		const tosend = await Promise.all(
			await booksrecommended.map(async (b) => {
				const r = JSON.parse(JSON.stringify(b));
				r.book = await getBook_Service(b.bookId);
				return r;
			})
		);

		console.log(tosend);

		return tosend;
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
		const categories = await BookRecommendedCategory.findAll({
			include: [BookRecommended],
		});

		// console.log( caterogi);
		return categories.map((c) => {
			if (c.bookrecommendeds.length > 0) return c;
		});
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										obtencion de un registro
// ****************************************************************************

const getBookRecommended_Service = async (bookrecommendedId) => {
	const id = bookrecommendedId;

	try {
		const bookrecommended = await BookRecommended.findByPk(id, {
			include: [BookRecommendedCategory],
		});
		if (!bookrecommended) return null;

		const tosend = JSON.parse(JSON.stringify(bookrecommended));
		tosend.book = await getBook_Service(bookrecommended.bookId);

		console.log(tosend);

		return tosend;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updateBookRecommended_Service = async (
	bookrecommendedId,
	dataBookRecommended,
	dataCategories
) => {
	const data = dataBookRecommended;
	const id = bookrecommendedId;

	try {
		const bookrecommended = await BookRecommended.findByPk(id);

		const category = await BookRecommendedCategory.findOrCreate({
			where: { title: dataCategories },
		});

		await bookrecommended.update(data);

		if (category[0])
			await bookrecommended.setBookrecommendedcategory(category[0]);

		// await syncVideolinks();

		return await bookrecommended.reload();
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

const deleteBookRecommended_Service = async (bookrecommendedId) => {
	const id = bookrecommendedId;

	const bookrecommended = await BookRecommended.findByPk(id);

	if (!bookrecommended) return null;

	if (bookrecommended.status === "a") {
		bookrecommended.status = "d";
		await bookrecommended.save();

		// await syncVideolinks();

		return bookrecommended;
	} else {
		await bookrecommended.destroy();
		return { message: "eliminado" };
	}
};

module.exports = {
	createBookRecommended_Service,
	getBookRecommended_Service,
	getBookRecommendeds_Service,
	getCategories_Service,
	updateBookRecommended_Service,
	deleteBookRecommended_Service,
};
