const { Op } = require("sequelize");
const Book = require("../models/Book.model");
const BookFicha = require("../models/BookFicha.model");

const getBooksFicha_Service = async () => {
	// const where = {};

	try {
		const bookFicha = await BookFicha.findAll({
			limit: 4,
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

const deleteBookFicha_Service = async (idFicha) => {
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
	getBooksFicha_Service,
	getBookFicha_Service,
	updateBookFicha_Service,
	deleteBookFicha_Service,
};
