const { body } = require("express-validator"); //TODO <---
const { validateResult } = require("../../helpers/validateHelper");

// ************************************************************************
// 												para antecedestes
// ************************************************************************

const patientsAntecedentesValidator = [
	// ****************** Nombres ******************

	body()
		.exists()
		.withMessage("No se esta enviando un Array")
		.isArray()
		.withMessage("Lo enviado no es un array"),

	body("*.name")
		.exists()
		.withMessage("un elemento no tiene la propiedad 'name'")
		.notEmpty()
		.withMessage("la propiedad 'name' de un elemento esta vacia")
		.isString()
		.trim()
		.isLength({ min: 2 })
		.withMessage("El nombre proporcinado es muy corto, minimo 2 caracteres"),

	body("*.id")
		.optional()
		.exists()
		.notEmpty()
		.withMessage("La propiedad 'id' esta vacia")
		.isInt({ min: 1 })
		.withMessage("la propiedad 'id' debe ser un entero positivo")
		.toInt(),

	(req, res, next) => {
		validateResult(req, res, next);
	},
];

// ************************************************************************
// 								antecedentes familiares
// ************************************************************************

const patientsAntecedentesFamiliarValidator = [
	body()
		.exists()
		.withMessage("No se esta enviando un Array")
		.isArray()
		.withMessage("Lo enviado no es un array"),

	body(["*.pariente.name", "*.incidencia.name"])
		.exists()
		.withMessage("un elemento no tiene la propiedad 'name'")
		.notEmpty()
		.withMessage("la propiedad 'name' de un elemento esta vacia")
		.isString()
		.trim()
		.isLength({ min: 2 })
		.withMessage("El nombre proporcinado es muy corto, minimo 2 caracteres"),

	body(["*.pariente.id", "*.incidencia.id"])
		.optional()
		.exists()
		.notEmpty()
		.withMessage("La propiedad 'id' esta vacia")
		.isInt({ min: 1 })
		.withMessage("la propiedad 'id' debe ser un entero positivo")
		.toInt(),

	(req, res, next) => {
		validateResult(req, res, next);
	},
];

module.exports = {
	patientsAntecedentesValidator,
	patientsAntecedentesFamiliarValidator,
};
