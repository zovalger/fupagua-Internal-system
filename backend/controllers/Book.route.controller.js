const {
	getBook_Service,
	createBook_Service,
	getBooks_Service,
	updateBook_Service,
	deleteBook_Service,
} = require("../services/Book.service");

const createBook_RouteController = async (req, res) => {
	const data = req.body;
	const img = req.files?.img;
	try {
		const book = await createBook_Service(data, img);

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
	const data = req.body;
	const img = req.files?.img;

	try {
		const book = await updateBook_Service(id, data, img);

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
