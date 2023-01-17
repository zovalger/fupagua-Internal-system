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
	const { textToQuery } = req.query;
	let where = {};

	if (textToQuery) {
		console.log(textToQuery);
		const words = textToQuery.trim().split(" ");

		console.log(words);

		where = {
			[Op.or]: [
				{ title: { [Op.substring]: textToQuery } },
				{ description: { [Op.substring]: textToQuery } },
			],
		};
	}

	// for (const key in req.query) {
	// 	if (Object.hasOwnProperty.call(req.query, key)) {
	// 		const value = req.query[key];

	// 		where[key] = { [Op.substring]: value };
	// 	}
	// }

	console.log(where);

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
