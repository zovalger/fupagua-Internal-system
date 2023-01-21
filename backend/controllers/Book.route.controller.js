const { Op } = require("sequelize");
const Book = require("../models/Book.model");

// Book

const createBook = async (req, res) => {
	// const { title, description, dateStart, dateEnd, status } = req.body;

	try {
		const book = await Book.create(req.body);

		return res.json(book);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const getBooks = async (req, res) => {
	const { or, sortBy, direction, title, description, subtitle, cota, autor } =
		req.query;

	let query = {};
	const datos = [];

	if (title) datos.push({ title: { [Op.substring]: title } });
	if (description) datos.push({ description: { [Op.substring]: description } });
	if (subtitle) datos.push({ subtitle: { [Op.substring]: subtitle } });
	if (cota) datos.push({ cota: { [Op.substring]: cota } });
	if (autor) datos.push({ autor: { [Op.substring]: autor } });

	console.log(datos);

	query = {
		[Op[or ? "or" : "and"]]: datos,
	};

	// query = {
	// 	[Op[or ? "or" : "and"]]: [
	// 		{ title: { [Op.substring]: title } },
	// 		{ description: { [Op.substring]: description } },
	// 		{ subtitle: { [Op.substring]: subtitle } },
	// 		{ cota: { [Op.substring]: cota } },
	// 		{ autor: { [Op.substring]: autor } },
	// 	],
	// };

	const where = query;

	// for (const key in req.query) {
	// 	if (Object.hasOwnProperty.call(req.query, key)) {
	// 		const value = req.query[key];

	// 		where[key] = { [Op.substring]: value };
	// 	}
	// }

	// if (name) where.name = { [Op.substring]: name };
	// if (ci) where.ci = { [Op.substring]: ci };

	try {
		const book = await Book.findAll({
			where,
		});
		return res.json(book);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const getBook = async (req, res) => {
	const { id } = req.params;

	try {
		const book = await Book.findByPk(id);

		if (!book) return res.status(404).json({ message: "Book no found" });

		res.json(book);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const updateBook = async (req, res) => {
	const { id } = req.params;

	try {
		const book = await Book.findByPk(id);

		await book.update(req.body);

		return res.json(book);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const deleteBook = async (req, res) => {
	const { id } = req.params;

	try {
		const book = await Book.findByPk(id);

		if (!book)
			return res.status(404).json({
				message: "libro no encontrado",
			});

		console.log(await book.destroy());

		res.send("a Book move to trash");
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

module.exports = {
	createBook,
	getBooks,
	getBook,
	updateBook,
	deleteBook,
};
