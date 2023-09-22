const { body, query } = require("express-validator"); //TODO <---
const { validateResult } = require("../../helpers/validateHelper");
const Patient = require("../../models/Patient.model");
const { toUpperCamelCase } = require("../../utils/strUpperCamelCase");

// ************************************************************************
// 									validacion de los datos del paciente
// ************************************************************************

const validateHistoryNumber = [
	// ****************** Nombres ******************

	query("historyNumber").exists().isInt({ min: 1 }).toInt().trim(),
	
	(req, res, next) => {
		validateResult(req, res, next);
	},
];

module.exports = validateHistoryNumber;
