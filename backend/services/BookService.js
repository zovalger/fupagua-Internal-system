const { Op } = require("sequelize");
const { uploadImage, deleteImage } = require("../libs/cloudinary");
const Book = require("../models/Book.model");
const BookFicha = require("../models/BookFicha.model");
const ImgFile = require("../models/ImgFile.model");
const { bookResizeImg } = require("../utils/helperImg");
const { createBookFicha_Service } = require("./BookFichaService");
const {
	ImageAndOptimizationSync,
	ImgFileOptimiceAndFormate,
	DeleteInstaceImgFile_Book,
	ImageSyncCloud,
} = require("./ImageService");

const createBook_Service = async (dataBook, portadaBook, imgExtrasBook) => {
	// console.log(dataBook);
	// console.log(portadaBook);
	// console.log(imgExtrasBook);

	let data = dataBook;

	try {
		const book = await Book.create(data, { include: ["portada", "imgExtras"] });

		await createBookFicha_Service(book.id, {
			autors: book.autor,
			materias: book.materia,
		});

		// imagen de portada del libro

		if (portadaBook) {
			const format = await ImgFileOptimiceAndFormate(portadaBook);
			await ImgFile.create({ ...format, portadaId: book.id });
		}

		// imagenes extra del libro

		if (imgExtrasBook) {
			if (imgExtrasBook instanceof Array) {
				await imgExtrasBook.map(async (img) => {
					const format = await ImgFileOptimiceAndFormate(img);
					await ImgFile.create({
						...format,
						bookId: book.id,
					});
				});
			} else {
				const format = await ImgFileOptimiceAndFormate(imgExtrasBook);
				await ImgFile.create({ ...format, bookId: book.id });
			}
		}

		// setTimeout(() => ImageSyncCloud(), 3000);

		return await book.reload({ include: { all: true } });
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

	// setTimeout(() => ImageSyncCloud(), 3000);
	try {
		const books = await Book.findAll({
			where,
			order: [[sortBy, direction]],
			include: { all: true },
		});

		return books;
	} catch (error) {
		console.log(error);
		return error;
	}
};

const getBook_Service = async (id) => {
	// const id = id;

	// setTimeout(() => ImageSyncCloud(), 3000);

	try {
		const book = await Book.findByPk(id, {
			include: { all: true },
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
		// * buscamos y actualizamos datos del libro
		const book = await Book.findByPk(id, { include: { all: true } });
		await book.update(data);

		// * vemos si hay una nueva imagen para insertar
		// si es asi vemos si el libro tiene una imagen anterior
		// si es asi a eliminamos

		if (portadaBook) {
			if (book.portada) await DeleteInstaceImgFile_Book(book.portada.id);

			await ImgFileOptimiceAndFormate(portadaBook).then(
				async (format) =>
					await ImgFile.create({ ...format, portadaId: book.id })
			);
		}

		// imagenes extra del libro

		if (imgExtrasBook) {
			if (book.imgExtras.length > 0)
				await book.imgExtras.map(
					async (img) => await DeleteInstaceImgFile_Book(img.id)
				);

			if (imgExtrasBook instanceof Array) {
				await imgExtrasBook.map(async (img) => {
					await ImgFileOptimiceAndFormate(img).then(
						async (format) =>
							await ImgFile.create({
								...format,
								bookId: book.id,
							})
					);
				});
			} else {
				await ImgFileOptimiceAndFormate(imgExtrasBook).then(
					async (format) => await ImgFile.create({ ...format, bookId: book.id })
				);
			}
		}

		// setTimeout(() => ImageSyncCloud(), 3000);

		return book;
	} catch (error) {
		console.log(error);
		return error;
	}
};

const deleteBook_Service = async (idBook) => {
	const id = idBook;

	try {
		const book = await Book.findByPk(id, { include: { all: true } });

		if (!book) return null;

		// eliminamos las imagenes
		if (book.portada) await DeleteInstaceImgFile_Book(book.portada.id);

		//  eliminamos las imagenes extra

		if (book.imgExtras.length > 0)
			await book.imgExtras.map(
				async (img) => await DeleteInstaceImgFile_Book(img.id)
			);

		// const { img_public_id } = book;
		// // eliminar la imagen
		// if (img_public_id) {
		// 	try {
		// 		console.log(await deleteImage(img_public_id));
		// 	} catch (error) {
		// 		console.log("error al tratar de eliminar la imagen en cloudinary");
		// 		console.log(error);
		// 	}
		// }

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
