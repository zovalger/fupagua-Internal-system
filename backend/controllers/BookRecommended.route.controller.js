const {
	createBookRecommended_Service,
	getBookRecommendeds_Service,
	getBookRecommended_Service,
	updateBookRecommended_Service,
	deleteBookRecommended_Service,
	getCategories_Service,
} = require("../services/BookRecommendedService");

// ****************************************************************************
// 										creacion de registro
// ****************************************************************************

const createBookRecommended_RouteController = async (req, res) => {
	const { bookId, category } = req.body;

	try {
		const newBookRecommended = await createBookRecommended_Service(
			{ bookId },
			category
		);

		return res.json(newBookRecommended);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

// ****************************************************************************
// 										obtencion de varios paciente con busqueda incluida
// ****************************************************************************

const getBookRecommendeds_RouteController = async (req, res) => {
	try {
		const bookrecommended = await getBookRecommendeds_Service(req.query);
		return res.json(bookrecommended);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// ****************************************************************************
// 										obtencion de un solo paciente
// ****************************************************************************

const getBookRecommended_RouteController = async (req, res) => {
	const { id } = req.params;
	try {
		const bookrecommended = await getBookRecommended_Service(id);

		if (!bookrecommended) return res.status(404).json({ message: "no found" });

		res.json(bookrecommended);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

// ****************************************************************************
// 										obtencion todas las categorias creadas
// ****************************************************************************

const getCategories_RouteController = async (req, res) => {
	// const { id } = req.params;
	try {
		const categories = await getCategories_Service();

		if (!categories) return res.status(404).json({ message: "no found" });

		res.json(categories);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updateBookRecommended_RouteController = async (req, res) => {
	const { id } = req.params;
	const { bookId, category } = req.body;

	try {
		const updateBookRecommended = await updateBookRecommended_Service(
			id,
			{ bookId },
			category
		);

		if (!updateBookRecommended)
			return res.status(404).json({ message: "not found" });

		return res.json(updateBookRecommended);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// ****************************************************************************
// 				marcado como eliminado (cambio propidad estatus de registro)
// ****************************************************************************

// la primera peticion marca como eliminado el registro
// en la segunda consulta se eliminara permanentemente de la base de datos

const deleteBookRecommended_RouteController = async (req, res) => {
	const { id } = req.params;

	const bookrecommended = await deleteBookRecommended_Service(id);

	if (!bookrecommended) return res.status(404).json(bookrecommended);

	return res.json(bookrecommended);
};

module.exports = {
	createBookRecommended_RouteController,
	getCategories_RouteController,
	getBookRecommendeds_RouteController,
	getBookRecommended_RouteController,
	updateBookRecommended_RouteController,
	deleteBookRecommended_RouteController,
};
