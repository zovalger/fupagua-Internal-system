const { body } = require("express-validator"); //TODO <---
const { validateResult } = require("../helpers/validateHelper");
const Patient = require("../models/Patient.model");

const validateCreatePatient = [
	body("patient.name").exists().trim(),
	body("patient.ci").isString().trim(),
	body("patient.dateBirth").exists(),
	body("patient.age")
		.exists()
		.isNumeric()
		.custom((value, { req }) => {
			//TODO: 18
			if (value < 0) {
				throw new Error("la edad no puede ser menor o igual a 0");
			}
			return true;
		}),
	body("patient.sex").exists().trim().isIn(["male", "female"]),
	// body("patient.weight").isNumeric(),
	body(["patient.height", "patient.weight"]).customSanitizer(
		async (value, { req }) => {
			if (!value) return 0;

			if (typeof value === "string") value = parseFloat(value);

			return value;
		}
	),
	// body("patient.address").isString().trim(),
	body("patient.scholarship").isString().trim(),
	body("patient.historyNumber").customSanitizer(async (value, { req }) => {
		const lastPatient = await Patient.findOne({
			order: [["createdAt", "DESC"]],
		});

		if (lastPatient) return parseInt(lastPatient.id) + 1;

		return 1;
	}),
	(req, res, next) => {
		validateResult(req, res, next);
	},
];

module.exports = { validateCreatePatient };
