const { Op } = require("sequelize");
const { uploadImage, deleteImage } = require("../libs/cloudinary");
const Book = require("../models/Book.model");
const BookFicha = require("../models/BookFicha.model");
const { bookResizeImg } = require("../utils/helperImg");

// Book

// data, img
const createBook_Service = async (dataBook, imgBook) => {
	const data = dataBook;
	const img = imgBook;

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

		if (img) {
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

		return book;
	} catch (error) {
		console.log(error);
		return error;
	}
};

const getBooks_Service = async (query) => {
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
	} = query;

	const datos = [];

	if (title) datos.push({ title: { [Op.substring]: title } });
	if (description) datos.push({ description: { [Op.substring]: description } });
	if (subtitle) datos.push({ subtitle: { [Op.substring]: subtitle } });
	if (cota) datos.push({ cota: { [Op.substring]: cota } });
	if (autor) datos.push({ autor: { [Op.substring]: autor } });
	if (materia) datos.push({ materia: { [Op.substring]: materia } });

	// console.log(datos);

	const where = {};

	if (datos.length > 0) where[Op[or ? "or" : "and"]] = datos;

	try {
		const books = await Book.findAll({
			where,
			order: [[sortBy, direction]],
		});
		return books;
	} catch (error) {
		console.log(error);
		return error;
	}
};

const getBook_Service = async (id) => {
	// const id = id;

	try {
		const book = await Book.findByPk(id, { include: BookFicha });

		return book ? book : null;
	} catch (error) {
		console.log(error);
		return error;
	}
};

const updateBook_Service = async (idBook, dataBook, imgBook) => {
	const id = idBook;
	const data = dataBook;
	const img = imgBook;

	try {
		const book = await Book.findByPk(id);

		await book.update(data);

		// ver si tiene imagen primero

		if (img) {
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

		return book;
	} catch (error) {
		console.log(error);
		return error;
	}
};

const deleteBook_Service = async (idBook) => {
	const id = idBook;

	try {
		const book = await Book.findByPk(id);

		if (!book) return null;

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

		return "elemento en eliminado";
		// res.send("a Book move to trash");
	} catch (error) {
		console.log(error);

		return null;
	}
};

module.exports = {
	createBook_Service,
	getBooks_Service,
	getBook_Service,
	updateBook_Service,
	deleteBook_Service,
};
