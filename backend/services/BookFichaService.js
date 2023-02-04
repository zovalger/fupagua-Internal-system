const { Op } = require("sequelize");
const Book = require("../models/Book.model");
const BookFicha = require("../models/BookFicha.model");

const createBookFicha_Service = async (id_Book, { materias }) => {
	const bookId = id_Book;

	// const m = materias.split(",");

	const dataFichas = [
		{ bookId, typeFicha: "autor", title: "Autor" },
		{ bookId, typeFicha: "cota", title: "Cota" },
		{ bookId, typeFicha: "title", title: "Titulo" },
	];

	if (materias)
		materias
			.split(",")
			.map((value) =>
				dataFichas.push({ bookId, typeFicha: "materia", title: value.trim() })
			);


	const fichas = await BookFicha.bulkCreate(dataFichas);

	return fichas;
};

const getBooksFicha_Service = async () => {
	// const where = {};

	// const limit = limit;

	try {
		const bookFicha = await BookFicha.findAll({
			limit: 6,
			where: { printed: false },
			include: {
				model: Book,
				where: { type: { [Op.or]: ["book", "audiobook"] } },
			},
		});
		return bookFicha;
	} catch (error) {
		console.log(error);
		return error;
	}
};

const getBookFicha_Service = async (idFicha) => {
	const id = idFicha;

	try {
		const bookFicha = await BookFicha.findByPk(id);

		if (!bookFicha) return res.status(404).json({ message: "Book no found" });

		return bookFicha;
	} catch (error) {
		console.log(error);
		return error;
	}
};

const updateBookFicha_Service = async (idFicha, printedFicha) => {
	const id = idFicha;
	const printed = printedFicha;

	try {
		const bookFicha = await BookFicha.findByPk(id);

		await bookFicha.update({ printed });

		return bookFicha;
	} catch (error) {
		console.log(error);
		return error;
	}
};

const actualizarMaterias_Service = async (idBook, materias) => {
	const fichas = await BookFicha.findAll({
		where: { bookId: idBook, typeFicha: "materia" },
	});


};

const deleteBookFicha_Service = async (idFicha) => {
	try {
		const bookFicha = await BookFicha.findByPk(idFicha);

		if (!bookFicha) return;

		await bookFicha.destroy();
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	createBookFicha_Service,
	getBooksFicha_Service,
	getBookFicha_Service,
	updateBookFicha_Service,
	deleteBookFicha_Service,
	actualizarMaterias_Service,
};
