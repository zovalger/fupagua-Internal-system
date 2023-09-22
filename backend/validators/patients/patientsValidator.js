const { body } = require("express-validator"); //TODO <---
const { validateResult } = require("../../helpers/validateHelper");
const Patient = require("../../models/Patient.model");
const { toUpperCamelCase } = require("../../utils/strUpperCamelCase");

// ************************************************************************
// 									validacion de los datos del paciente
// ************************************************************************

const validatePatientData = [
	// ****************** Nombres ******************

	body("patient.name")
		.exists()
		.isString()
		.trim()
		.customSanitizer((value) => toUpperCamelCase(value)),

	// ****************** cedulas ******************

	body("patient.ci")
		.optional()
		.exists()
		.customSanitizer((value, { req }) => {
			if (!value) return "";

			const newValue = value.toString().replace(/\D/g, "");

			console.log(value, newValue);

			return newValue;
		}),

	// ****************** fecha de nacimiento ******************

	body("patient.dateBirth").exists(),

	// ****************** edades ******************

	body("patient.age").exists().isInt({ min: 1 }).toInt(),

	// ****************** sexo ******************

	body("patient.sex").exists().isString().trim().isIn(["male", "female"]),

	// ****************** atributos ******************

	body(["patient.height", "patient.weight"]).customSanitizer(
		async (value, { req }) => {
			if (!value) return 0;

			if (typeof value === "string") value = parseFloat(value);

			return value;
		}
	),

	body("patient.address")
		.optional()
		.customSanitizer((value, { req }) => {
			const { id_estado, id_municipio, id_parroquia } = value;

			if (id_estado) return value;

			return {
				id_ciudad: null,
				id_municipio: null,
				id_parroquia: null,
				id_estado: null,
			};
		}),

	// ****************** escuela ******************

	body("patient.scholarship").isString().trim(),
	body("patient.procedencia").optional().isString().trim(),
	body("patient.diagnostico").optional().isString().trim(),

	// ****************** numero de historia ******************

	body("patient.historyNumber")
		.exists()
		.isInt({ min: 1 })
		.toInt()
		.custom(async (value, { req }) => {
			const { id } = req.params;

			// obtenemos el
			const oldPatient = await Patient.findOne({
				where: { historyNumber: value },
			});

			if (oldPatient)
				if (oldPatient.id != id)
					throw new Error(
						`El numero de historia ${value} le pertenece al paciente ${oldPatient.id} `
					);

			return true;
		}),

	(req, res, next) => {
		validateResult(req, res, next);
	},
];

module.exports = validatePatientData;
