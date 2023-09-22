const { body, query } = require("express-validator"); //TODO <---
const { validateResult } = require("../../helpers/validateHelper");
const Patient = require("../../models/Patient.model");
const { toUpperCamelCase } = require("../../utils/strUpperCamelCase");

// ************************************************************************
// 									validacion de los datos del paciente
// ************************************************************************

const simpleQueryValidator = [
	// ****************** Nombres ******************

	query("patient.name")
		.optional()
		.exists()
		.isString()
		.trim()
		.customSanitizer((value) => toUpperCamelCase(value)),

	// ****************** cedulas ******************

	query("patient.ci")
		.optional()
		.exists()
		.customSanitizer((value, { req }) => {
			if (!value) return "";

			const newValue = value.toString().replace(/\D/g, "");

			console.log(value, newValue);

			return newValue;
		}),
	query("historyNumber").optional().exists().isInt({ min: 1 }).toInt(),

	(req, res, next) => {
		validateResult(req, res, next);
	},
];

module.exports = simpleQueryValidator;
