const { Op } = require("sequelize");
const { uploadImage, deleteImage } = require("../libs/cloudinary");
const Book = require("../models/Book.model");

// Book

const createBook = async (req, res) => {
	const { img } = req.files;
	const data = req.body;

	try {
		// primero guardar los datos del libro
		const book = await Book.create(data);

		// luego subir la imagen a cloudinary

		if (img) {
			const { tempFilePath } = img;

			book.img_local_url = tempFilePath;

			try {
				const result = await uploadImage(tempFilePath);
				console.log(result);

				const { public_id, url, secure_url, format } = result;

				book.img_public_id = public_id;
				book.img_cloudinary_url = secure_url;
				book.img_format = format;
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
	} = req.query;

	let query = {};
	const datos = [];

	if (title) datos.push({ title: { [Op.substring]: title } });
	if (description) datos.push({ description: { [Op.substring]: description } });
	if (subtitle) datos.push({ subtitle: { [Op.substring]: subtitle } });
	if (cota) datos.push({ cota: { [Op.substring]: cota } });
	if (autor) datos.push({ autor: { [Op.substring]: autor } });

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
				const { img_public_id, img_cloudinary_url, img_format } = book;

				book.img_public_id = "";
				book.img_cloudinary_url = "";
				book.img_format = "";

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
				const result = await uploadImage(tempFilePath);
				console.log(result);

				const { public_id, url, secure_url, format } = result;

				book.img_public_id = public_id;
				book.img_cloudinary_url = secure_url;
				book.img_format = format;
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
