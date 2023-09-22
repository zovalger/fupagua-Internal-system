const { body, query } = require("express-validator");
const { validateResult } = require("../../helpers/validateHelper");

// ************************************************************************
// 									fupagua empleados: datos
// ************************************************************************

const validateFupaguaEmpleadoData = [
	body("name")
		.exists()
		.withMessage("el atributo name no exite")
		.isString()
		.withMessage("el atributo name no es un texto")
		.trim()
		.isLength({ min: 3 })
		.withMessage("el atributo name debe tener minimo 3 caracteres"),

	body("ci")
		.exists()
		.isString()
		.trim()
		.customSanitizer((value, { req }) => {
			if (!value) return "";

			const newValue = value.replace(/\D/g, "");

			console.log(value, newValue);

			return newValue;
		}),

	body("FPV")
		.exists()
		.withMessage("el atributo FPV no exite")
		.isString()
		.withMessage("el atributo FPV no es un texto")
		.trim(),

	body("description")
		.exists()
		.withMessage("el atributo description no exite")
		.isString()
		.withMessage("el atributo description no es un texto")
		.trim(),

	body("email")
		.optional()
		.exists()
		.withMessage("el atributo description no exite")
		.isString()
		.withMessage("el atributo description no es un texto")
		.trim()
		.isEmail(),

	(req, res, next) => {
		validateResult(req, res, next);
	},
];

module.exports = { validateFupaguaEmpleadoData };
