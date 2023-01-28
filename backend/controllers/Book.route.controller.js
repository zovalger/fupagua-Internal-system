const { Op } = require("sequelize");
const { uploadImage, deleteImage } = require("../libs/cloudinary");
const Book = require("../models/Book.model");
const BookFicha = require("../models/BookFicha.model");
const { bookResizeImg } = require("../utils/helperImg");

// Book

const createBook = async (req, res) => {
	const data = req.body;

	try {
		// primero guardar los datos del libro
		const book = await Book.create(data);

		await BookFicha.bulkCreate([
			{ bookId: book.id, typeFicha: "materia" },
			{ bookId: book.id, typeFicha: "autor" },
			{ bookId: book.id, typeFicha: "cota" },
			{ bookId: book.id, typeFicha: "title" },
		]);

		// console.log(await Book.findByPk(book.id, { include: BookFicha }));
		// luego subir la imagen a cloudinary

		if (req.files?.img) {
			const { img } = req.files;
			const { tempFilePath } = img;

			book.img_local_url = tempFilePath;

			const img_optimized = await bookResizeImg(tempFilePath, 350);

			try {
				const result = await uploadImage(img_optimized);
				console.log(result);

				const { public_id, secure_url } = result;

				book.img_public_id = public_id;
				book.img_cloudinary_url = secure_url;
			} catch (error) {
				console.log("error al subir imagen");
				console.log(error);
			}

			await book.save();
		}

		return res.json(book);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const getBooks = async (req, res) => {
	const {
		or,
		sortBy = "title",
		direction = "ASC",
		title,
		description,
		subtitle,
		cota,
		autor,
		materia,
	} = req.query;

	let query = {};
	const datos = [];

	if (title) datos.push({ title: { [Op.substring]: title } });
	if (description) datos.push({ description: { [Op.substring]: description } });
	if (subtitle) datos.push({ subtitle: { [Op.substring]: subtitle } });
	if (cota) datos.push({ cota: { [Op.substring]: cota } });
	if (autor) datos.push({ autor: { [Op.substring]: autor } });
	if (materia) datos.push({ materia: { [Op.substring]: materia } });

	console.log(datos);

	const where = {};

	if (datos.length > 0) where[Op[or ? "or" : "and"]] = datos;

	try {
		const book = await Book.findAll({
			where,
			order: [[sortBy, direction]],
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
	// const { img } = req.files;
	const data = req.body;

	try {
		const book = await Book.findByPk(id);

		await book.update(req.body);

		// ver si tiene imagen primero

		if (req.files?.img) {
			const { img } = req.files;
			const { tempFilePath } = img;

			// eliminar la imagen anterior
			if (book.img_local_url) {
				const { img_public_id } = book;

				book.img_public_id = "";
				book.img_cloudinary_url = "";
				book.img_local_url = tempFilePath;

				try {
					await deleteImage(img_public_id);
				} catch (error) {
					console.log("error al tratar de eliminar la imagen en cloudinary");
					console.log(error);
				}
			}

			// subir la nueva imagen
			try {
				const img_optimized = await bookResizeImg(tempFilePath, 350);

				const result = await uploadImage(img_optimized);
				console.log(result);

				const { public_id, secure_url } = result;

				book.img_public_id = public_id;
				book.img_cloudinary_url = secure_url;
			} catch (error) {
				console.log("error al subir imagen");
				console.log(error);
			}

			await book.save();
		}

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

		const { img_public_id } = book;
		// eliminar la imagen
		if (img_public_id) {
			try {
				console.log(await deleteImage(img_public_id));
			} catch (error) {
				console.log("error al tratar de eliminar la imagen en cloudinary");
				console.log(error);
			}
		}

		// ver si tiene imagen primero

		// deleteImage(id)
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
