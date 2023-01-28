const { Op } = require("sequelize");
const Book = require("../models/Book.model");
const BookFicha = require("../models/BookFicha.model");

const getBooksFicha = async (req, res) => {
	const { title } = req.query;

	const where = {
		printed: false,
	};

	// if (datos.length > 0) where[Op[or ? "or" : "and"]] = datos;

	try {
		const bookFicha = await BookFicha.findAll({
			where,
			limit: 4,
			include: Book,
		});
		return res.json(bookFicha);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const getBookFicha = async (req, res) => {
	const { id } = req.params;

	try {
		const bookFicha = await BookFicha.findByPk(id);

		if (!bookFicha) return res.status(404).json({ message: "Book no found" });

		res.json(bookFicha);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const updateBookFicha = async (req, res) => {
	const { id } = req.params;
	const { printed } = req.body;

	try {
		const bookFicha = await BookFicha.findByPk(id);

		await bookFicha.update({ printed });

		return res.json(bookFicha);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const deleteBookFicha = async (req, res) => {
	const { id } = req.params;

	// try {
	// 	const book = await Book.findByPk(id);

	// 	if (!book)
	// 		return res.status(404).json({
	// 			message: "libro no encontrado",
	// 		});

	// 	const { img_public_id } = book;
	// 	// eliminar la imagen
	// 	if (img_public_id) {
	// 		try {
	// 			console.log(await deleteImage(img_public_id));
	// 		} catch (error) {
	// 			console.log("error al tratar de eliminar la imagen en cloudinary");
	// 			console.log(error);
	// 		}
	// 	}

	// 	// ver si tiene imagen primero

	// 	// deleteImage(id)
	// 	console.log(await book.destroy());

	// 	res.send("a Book move to trash");
	// } catch (error) {
	// 	res.status(500).send(error);
	// 	console.log(error);
	// }
};

module.exports = {
	// createBook,
	getBooksFicha,
	getBookFicha,
	updateBookFicha,
	deleteBookFicha,
};
