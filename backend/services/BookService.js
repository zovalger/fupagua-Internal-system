const { Op } = require("sequelize");
const { uploadImage, deleteImage } = require("../libs/cloudinary");
const Book = require("../models/Book.model");
const BookFicha = require("../models/BookFicha.model");
const ImgFile = require("../models/ImgFile.model");
const { bookResizeImg, ImgFileFormate } = require("../utils/helperImg");
const { createBookFicha_Service } = require("./BookFichaService");
const { ImageAndOptimizationSync } = require("./ImageService");

// Book

// data, img
const createBook_Service = async (dataBook, portadaBook, imgExtrasBook) => {
	let data = dataBook;

	try {
		const book = await Book.create(data, { include: ["portada", "imgExtras"] });

		await createBookFicha_Service(book.id, {
			autors: book.autor,
			materias: book.materia,
		});

		// imagen de portada del libro

		if (portadaBook)
			await ImgFileFormate(portadaBook).then(
				async (format) =>
					await ImgFile.create({ ...format, portadaId: book.id })
			);

		// imagenes extra del libro

		if (imgExtrasBook) {
			if (imgExtrasBook instanceof Array) {
				await imgExtrasBook.map(async (img) => {
					const format = await ImgFileFormate(img);
					const newImg = await ImgFile.create({
						...format,
						bookId: book.id,
					});

					// console.log(newImg);
				});
			} else {
				const format = await ImgFileFormate(imgExtrasBook);
				const img = await ImgFile.create({ ...format, bookId: book.id });

				// console.log(img);
			}
		}

		return await book.reload({ include: ["portada", "imgExtras"] });
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
		observations,
		type = "book",
	} = query;

	const datos = [];

	if (title) datos.push({ title: { [Op.substring]: title } });
	if (description) datos.push({ description: { [Op.substring]: description } });
	if (subtitle) datos.push({ subtitle: { [Op.substring]: subtitle } });
	if (cota) datos.push({ cota: { [Op.substring]: cota } });
	if (autor) datos.push({ autor: { [Op.substring]: autor } });
	if (materia) datos.push({ materia: { [Op.substring]: materia } });
	if (observations)
		datos.push({ observations: { [Op.substring]: observations } });

	// datos.push();

	const where = { type };

	if (datos.length > 0) where[Op[or ? "or" : "and"]] = datos;

	console.log(where);

	try {
		const books = await Book.findAll({
			where,
			order: [[sortBy, direction]],
			include: ["portada", "imgExtras"],
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
		const book = await Book.findByPk(id, {
			include: [BookFicha, "portada", "imgExtras"],
		});

		return book ? book : null;
	} catch (error) {
		console.log(error);
		return error;
	}
};

const updateBook_Service = async (
	idBook,
	dataBook,
	portadaBook,
	imgExtrasBook
) => {
	const id = idBook;
	const data = dataBook;

	try {
		const book = await Book.findByPk(id, { include: { all: true } });

		await book.update(data);

		if (portadaBook) {
			if (book.portada) {
				if (book.portada.public_id) {
					await deleteImage(img_public_id);
				}
			}

			await ImgFileFormate(portadaBook).then(
				async (format) =>
					await ImgFile.create({ ...format, portadaId: book.id })
			);
		}

		// imagenes extra del libro

		if (imgExtrasBook) {
			if (imgExtrasBook instanceof Array) {
				await imgExtrasBook.map(async (img) => {
					const format = await ImgFileFormate(img);
					const newImg = await ImgFile.create({
						...format,
						bookId: book.id,
					});

					// console.log(newImg);
				});
			} else {
				const format = await ImgFileFormate(imgExtrasBook);
				const img = await ImgFile.create({ ...format, bookId: book.id });

				// console.log(img);
			}
		}

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
