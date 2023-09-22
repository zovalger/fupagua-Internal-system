const { body } = require("express-validator"); //TODO <---
const { validateResult } = require("../../helpers/validateHelper");
const Patient = require("../../models/Patient.model");
const User = require("../../models/User.model");
const { toUpperCamelCase } = require("../../utils/strUpperCamelCase");

// ************************************************************************
// 									validacion de los datos del paciente
// ************************************************************************

const validateUserData = [
	// ****************** Nombres ******************

	body("name")
		.exists()
		.isString()
		.trim()
		.customSanitizer((value) => toUpperCamelCase(value)),

	// ****************** cedulas ******************

	body("CI")
		.optional()
		.exists()
		.customSanitizer((value, { req }) => {
			if (!value) return "";

			const newValue = value.toString().replace(/\D/g, "");

			console.log(value, newValue);

			return newValue;
		})
		.custom(async (CI, { req }) => {
			const { id } = req.params;

			const oldUser = await User.findOne({ where: { CI } });

			if (oldUser)
				if (oldUser.id != id)
					throw new Error(
						`Ya la cedula "${value}" esta registrada con el usuario ${oldUser.name}`
					);

			return true;
		}),

	// ****************** fecha de nacimiento ******************

	body("birthdate").exists(),

	body("address")
		.exists()
		.withMessage("La direccion es obligatoria")
		.isString()
		.trim(),

	body("phone").exists().withMessage("El numero de telefono es obligatorio"),

	body("email")
		.exists()
		.withMessage("El correo electronico es obligatorio")
		.isString()
		.isEmail()
		.withMessage("No es un formato de correo valido"),

	(req, res, next) => {
		validateResult(req, res, next);
	},
];

module.exports = validateUserData;
