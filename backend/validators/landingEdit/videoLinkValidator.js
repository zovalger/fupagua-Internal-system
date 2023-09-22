const { body, query } = require("express-validator");
const { validateResult } = require("../../helpers/validateHelper");

// ************************************************************************
// 									VideoLink: datos
// ************************************************************************

const validateVideoLinkData = [
	body("videolink")
		.exists()
		.withMessage("no esta el atributo videolink")
		.isObject()
		.withMessage("el atributo videolink no es un objeto"),

	body("videolink.title")
		.exists()
		.withMessage("el atributo title no exite")
		.isString()
		.withMessage("el atributo title no es un texto")
		.trim()
		.isLength({ min: 3 })
		.withMessage("el atributo title debe tener minimo 3 caracteres"),

	body("videolink.description")
		.exists()
		.withMessage("el atributo description no exite")
		.isString()
		.withMessage("el atributo description no es un texto")
		.trim()
		.isLength({ min: 3 })
		.withMessage("el atributo description debe tener minimo 3 caracteres"),

	body("videolink.url")
		.exists()
		.withMessage("no existe el atributo url")
		.isString()
		.withMessage("el atributo url no es un estring")
		.trim()
		.isURL()
		.withMessage("El texto proporcinado no tiene el formato de link"),

	body("category")
		.exists()
		.withMessage("No se esta proporcinando la categoria")
		.notEmpty()
		.isString()
		.withMessage("la categoria no es un texto")
		.trim()
		.isLength({ min: 3 })
		.withMessage("la categoria debe tener minimo 3 caracteres"),

	(req, res, next) => {
		validateResult(req, res, next);
	},
];

const validatorExistUrl = [
	query("url")
		.exists()
		.withMessage("No se esta proporcinando la url")
		.notEmpty()
		.isString()
		.withMessage("la url no es un texto")
		.trim()
		.isURL()
		.withMessage("El texto proporcinado no tiene el formato de link"),

	(req, res, next) => {
		validateResult(req, res, next);
	},
];

module.exports = { validateVideoLinkData, validatorExistUrl };
