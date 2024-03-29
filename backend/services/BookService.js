const { Op } = require("sequelize");
const { uploadImage, deleteImage } = require("../libs/cloudinary");
const Book = require("../models/Book.model");
const BookFicha = require("../models/BookFicha.model");
const ImgFile = require("../models/ImgFile.model");
const { createBookFicha_Service } = require("./BookFichaService");
const { markToDeleteImgFile } = require("./ImageService");

const createBook_Service = async (dataBook, portadaBook, imgExtrasBook) => {
	// console.log(dataBook);
	// console.log(portadaBook);
	// console.log(imgExtrasBook);

	let data = dataBook;

	try {
		const book = await Book.create(data, {
			include: [
				{
					model: ImgFile,
					as: "portada",
				},
				{
					model: ImgFile,
					as: "book_extra_img",
				},
			],
		});

		await createBookFicha_Service(book.id, {
			autors: book.autor,
			materias: book.materia,
		});

		// imagen de portada del libro

		if (portadaBook) {
			const portada = await ImgFile.create({
				img_local_url_original: portadaBook.tempFilePath,
			});

			console.log(book.setBookportada);
			await book.setPortada(portada);

			// todo: optimizar la imagen

			// const format = await ImgFileOptimiceAndFormate(portadaBook);
			// await ImgFile.create({ ...format, portadaId: book.id });
		}

		// imagenes extra del libro

		if (imgExtrasBook) {
			const allExtraImg = [];
			if (imgExtrasBook instanceof Array) {
				for (let i = 0; i < imgExtrasBook.length; i++) {
					const imgf = imgExtrasBook[i];

					const imginstace = await ImgFile.create({
						img_local_url_original: imgf.tempFilePath,
					});

					allExtraImg.push(imginstace);
				}
			} else {
				const imginstace = await ImgFile.create({
					img_local_url_original: imgExtrasBook.tempFilePath,
				});

				allExtraImg.push(imginstace);
			}
			console.log(allExtraImg);
			await book.setBook_extra_img(allExtraImg);
		}

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

		console.log("*****************************************************");
		console.log(book);
		console.log("*****************************************************");

		await book.update(data);

		console.log(data);

		console.log("*****************************************************");
		console.log(book);
		console.log("*****************************************************");

		if (portadaBook) {
			if (book.portada) await markToDeleteImgFile(book.portada.id);

			const portada = await ImgFile.create({
				img_local_url_original: portadaBook.tempFilePath,
			});

			await book.setPortada(portada);
		}

		// imagenes extra del libro

		if (imgExtrasBook) {
			if (book.book_extra_img.length > 0)
				await book.book_extra_img.map(async (img) => {
					await markToDeleteImgFile(img.id);
				});

			const allExtraImg = [];
			if (imgExtrasBook instanceof Array) {
				for (let i = 0; i < imgExtrasBook.length; i++) {
					const imgf = imgExtrasBook[i];

					const imginstace = await ImgFile.create({
						img_local_url_original: imgf.tempFilePath,
					});

					allExtraImg.push(imginstace);
				}
			} else {
				const imginstace = await ImgFile.create({
					img_local_url_original: imgExtrasBook.tempFilePath,
				});

				allExtraImg.push(imginstace);
			}
			await book.setBook_extra_img(allExtraImg);
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
		const book = await Book.findByPk(id, { include: { all: true } });

		console.log(book);

		if (!book) return null;

		// eliminamos las imagenes
		if (book.portada) await markToDeleteImgFile(book.portada.id);

		//  eliminamos las imagenes extra

		if (book.book_extra_img.length > 0)
			book.book_extra_img.map(async (i) => await markToDeleteImgFile(i.id));

		await book.destroy();


		return book
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
