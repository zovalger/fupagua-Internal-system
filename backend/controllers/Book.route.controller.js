const {
	getBook_Service,
	createBook_Service,
	getBooks_Service,
	updateBook_Service,
	deleteBook_Service,
} = require("../services/BookService");

const createBook_RouteController = async (req, res) => {
	const {
		title,
		subtitle,
		description,
		cota,
		autor,
		editionDate,
		city,
		editors,
		materia,
		height,
		numberCopies,
		numberCopiesAvailable,
		numberPages,
		typeAdquisition,
		observations,
		collection,
		type,
	} = req.body;

	const data = {
		title,
		subtitle,
		description,
		cota,
		autor,
		editionDate,
		city,
		editors,
		materia,
		height,
		numberCopies,
		numberCopiesAvailable,
		numberPages,
		typeAdquisition,
		observations,
		collection,
		type,
	};
	let portada_Img = null,
		extraImg_Img = null;

	if (req.files) {
		// console.log("********************************************");
		// console.log(req.files);
		// console.log("********************************************");

		const { portada, book_extra_img } = req.files;
		portada_Img = portada ? portada : null;
		extraImg_Img = book_extra_img ? book_extra_img : null;
	}

	try {
		const book = await createBook_Service(data, portada_Img, extraImg_Img);

		return res.json(book);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const getBooks_RouteController = async (req, res) => {
	try {
		const books = await getBooks_Service(req.query);
		return res.json(books);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const getBook_RouteController = async (req, res) => {
	const { id } = req.params;

	try {
		const book = await getBook_Service(id);

		if (!book) return res.status(404).json({ message: "Book no found" });

		res.json(book);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const updateBook_RouteController = async (req, res) => {
	const { id } = req.params;
	const {
		title,
		subtitle,
		description,
		cota,
		autor,
		editionDate,
		city,
		editors,
		materia,
		height,
		numberCopies,
		numberCopiesAvailable,
		numberPages,
		typeAdquisition,
		observations,
		collection,
		type,
	} = req.body;

	const data = {
		title,
		subtitle,
		description,
		cota,
		autor,
		editionDate,
		city,
		editors,
		materia,
		height,
		numberCopies,
		numberCopiesAvailable,
		numberPages,
		typeAdquisition,
		observations,
		collection,
		type,
	};

	let portada_Img = null,
		extraImg_Img = null;

	if (req.files) {
		const { portada, book_extra_img } = req.files;
		portada_Img = portada ? portada : null;
		extraImg_Img = book_extra_img ? book_extra_img : null;
	}

	try {
		const book = await updateBook_Service(id, data, portada_Img, extraImg_Img);

		return res.json(book);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

const deleteBook_RouteController = async (req, res) => {
	const { id } = req.params;

	try {
		const result = await deleteBook_Service(id);

		if (!result) return res.status(404).send("elemento no encontrado");
		return res.send(result);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

module.exports = {
	createBook_RouteController,
	getBooks_RouteController,
	getBook_RouteController,
	updateBook_RouteController,
	deleteBook_RouteController,
};
