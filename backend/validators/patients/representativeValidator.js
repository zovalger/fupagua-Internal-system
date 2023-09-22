const { body } = require("express-validator"); //TODO <---
const { validateResult } = require("../../helpers/validateHelper");
const { toUpperCamelCase } = require("../../utils/strUpperCamelCase");

// ************************************************************************
// 									validacion de los datos del paciente
// ************************************************************************

const validateRepresentativeData = [
	// ****************** Nombres ******************

	body("representative.name")
		.exists()
		.isString()
		.trim()
		.customSanitizer((value) => toUpperCamelCase(value)),

	// ****************** cedulas ******************

	body("representative.ci")
		.exists()
		.isString()
		.trim()
		.customSanitizer((value, { req }) => {
			if (!value) return "";

			const newValue = value.replace(/\D/g, "");

			console.log(value, newValue);

			return newValue;
		}),

	// ****************** fecha de nacimiento ******************

	body("representative.dateBirth").exists(),

	// ****************** edades ******************

	body("representative.age").exists().isInt({ min: 1 }).toInt(),

	// ****************** forma de contacto ******************

	body("representative.email")
		.optional()
		.exists()
		.isString()
		.trim()
		.if((value) => value !== "")
		.isEmail()
		.withMessage("no es un formato de correo valido"),

	body("representative.phoneNumber").optional().exists().isString().trim(),

	(req, res, next) => {
		const { name, ci, age } = req.body.representative;

		if (name === "" && ci === "" && isNaN(age)) {
			req.body.representative = null;
			next();
		} else {
			validateResult(req, res, next);
		}
	},
];

module.exports = validateRepresentativeData;
