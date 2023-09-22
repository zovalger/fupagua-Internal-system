const { body, query } = require("express-validator"); //TODO <---
const { validateResult } = require("../helpers/validateHelper");

// ************************************************************************
// 									validacion al consultar cedula
// ************************************************************************

const consultCIValidator = [
	query("ci")
		.exists()
		.isString()
		.trim()
		.customSanitizer((value, { req }) => {
			if (!value) return "";

			const newValue = value.replace(/\D/g, "");

			console.log("anterior", value, "nuevo", newValue);

			return newValue;
		}),

	(req, res, next) => {
		validateResult(req, res, next);
	},
];

module.exports = { consultCIValidator };
