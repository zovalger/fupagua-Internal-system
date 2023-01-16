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
	// const { name, ci } = req.query;

	// const where = {};

	// if (name) where.name = { [Op.substring]: name };
	// if (ci) where.ci = { [Op.substring]: ci };

	try {
		const book = await Book.findAll({
			// where,
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
