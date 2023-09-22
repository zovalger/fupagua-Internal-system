const { body, query } = require("express-validator");
const { validateResult } = require("../../helpers/validateHelper");

// ************************************************************************
// 									VideoLink: datos
// ************************************************************************

const validateFupaguaServiceData = [
	body("title")
		.exists()
		.withMessage("el atributo title no exite")
		.isString()
		.withMessage("el atributo title no es un texto")
		.trim()
		.isLength({ min: 3 })
		.withMessage("el atributo title debe tener minimo 3 caracteres"),

	body("description")
		.exists()
		.withMessage("el atributo description no exite")
		.isString()
		.withMessage("el atributo description no es un texto")
		.trim()
		.isLength({ min: 3 })
		.withMessage("el atributo description debe tener minimo 3 caracteres"),

	(req, res, next) => {
		validateResult(req, res, next);
	},
];

module.exports = { validateFupaguaServiceData };
