const { body, param } = require("express-validator");
const { validateResult } = require("../../helpers/validateHelper");
const Book = require("../../models/Book.model");
const BookRecommended = require("../../models/BookRecommended.model");
const BookRecommendedCategory = require("../../models/BookRecommendedCategory.model");

// ************************************************************************
// 									VideoLink: datos
// ************************************************************************

const validateBookRecommendedData = [
	body("category")
		.exists()
		.withMessage("el atributo category no exite")
		.isString()
		.withMessage("el atributo category no es un texto")
		.trim()
		.isLength({ min: 3 })
		.withMessage("el atributo category debe tener minimo 3 caracteres"),

	body("bookId")
		.exists()
		.notEmpty()
		.withMessage("La propiedad 'bookId' esta vacia")
		.isInt({ min: 1 })
		.withMessage("la propiedad 'bookId' debe ser un entero positivo")
		.toInt()
		.custom(async (bookId, { req }) => {
			const { id } = req.params;

			const book = await Book.findByPk(bookId);

			if (!book) throw new Error(`no existe el libro con el id: "${bookId}"`);

			const instance = await BookRecommended.findOne({
				where: { bookId },
				include: BookRecommendedCategory,
			});

			if (!instance) return true;

			if (id == instance.id) return true;

			throw new Error(
				`ya el libro esta recomendando en la categoria "${instance.bookrecommendedcategory.title}"`
			);
		}),

	param("id")
		.optional()
		.exists()
		.notEmpty()
		.withMessage("La propiedad 'id' esta vacia")
		.isInt({ min: 1 })
		.withMessage("la propiedad 'id' debe ser un entero positivo")
		.toInt(),

	(req, res, next) => {
		validateResult(req, res, next);
	},
];

module.exports = { validateBookRecommendedData };
