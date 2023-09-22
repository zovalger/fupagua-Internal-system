const { body, query } = require("express-validator"); //TODO <---
const { validateResult } = require("../../helpers/validateHelper");
const Patient = require("../../models/Patient.model");
const { toUpperCamelCase } = require("../../utils/strUpperCamelCase");

// ************************************************************************
// 									validacion de los datos del paciente
// ************************************************************************

const avanzadeQueryValidator = [
	// or = null,
	// sortBy = "name",

	// ****************** historyNumber ******************
	query("historyNumber")
		.optional()
		.exists()
		.isString()
		.trim()
		.customSanitizer((value) => value || null),

	query("minHistoryNumber")
		.optional()
		.exists()
		.isInt()
		.customSanitizer((value) => value || null),

	query("maxHistoryNumber")
		.optional()
		.exists()
		.isInt()
		.customSanitizer((value) => value || null),

	// ****************** age ******************
	query("age")
		.optional()
		.exists()
		.customSanitizer((value) => value || null),

	query("minAge")
		.optional()
		.exists()
		.isInt()
		.customSanitizer((value) => value || null),

	query("maxAge")
		.optional()
		.exists()
		.isInt()
		.customSanitizer((value) => value || null),

	// ****************** height ******************
	query("height")
		.optional()
		.exists()
		.customSanitizer((value) => value || null),

	query("minHeight")
		.optional()
		.exists()
		.isInt()
		.customSanitizer((value) => value || null),

	query("maxHeight")
		.optional()
		.exists()
		.isInt()
		.customSanitizer((value) => value || null),

	// ****************** weight ******************
	query("weight")
		.optional()
		.exists()
		.customSanitizer((value) => value || null),

	query("minWeight")
		.optional()
		.exists()
		.isInt()
		.customSanitizer((value) => value || null),

	query("maxWeight")
		.optional()
		.exists()
		.isInt()
		.customSanitizer((value) => value || null),

	// ****************** sex ******************
	query("sex")
		.optional()
		.exists()
		.isString()
		.trim()
		.customSanitizer((value) =>
			value == "female" || value == "male" ? value : null
		),

	// ****************** procedenciaType ******************
	query("procedenciaType")
		.optional()
		.exists()
		.isString()
		.trim()
		.customSanitizer((value) => value || null),

	// ****************** procedenciaDiagnostico ******************
	query("procedenciaDiagnostico")
		.optional()
		.exists()
		.isString()
		.trim()
		.customSanitizer((value) => value || null),

	// ****************** diagnostico ******************
	query("diagnostico")
		.optional()
		.exists()
		.isString()
		.trim()
		.customSanitizer((value) => value || null),

	query("address")
		.optional()
		.customSanitizer((value, { req }) => {
			let { id_estado, id_municipio, id_parroquia, id_ciudad } = value;

			id_estado = id_estado ? (id_estado != "null" ? id_estado : null) : null;

			id_municipio = id_municipio
				? id_municipio != "null"
					? id_municipio
					: undefined
				: undefined;

			id_parroquia = id_parroquia
				? id_parroquia != "null"
					? id_parroquia
					: undefined
				: undefined;

			id_ciudad = id_ciudad
				? id_ciudad != "null"
					? id_ciudad
					: undefined
				: undefined;

			return JSON.parse(
				JSON.stringify({
					id_ciudad,
					id_municipio,
					id_parroquia,
					id_estado,
				})
			);
		}),

	(req, res, next) => {
		validateResult(req, res, next);
	},
];

module.exports = avanzadeQueryValidator;
