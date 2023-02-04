const Patient = require("../models/Patient.model");
const Representative = require("../models/Representative.model");

// Patient
// ****************************************************************************
// 										creacion de paciente
// ****************************************************************************

const createPatient = async (req, res) => {
	const { name, ci, age, dateBirth, school } = req.body;

	try {
		const patient = await Patient.create({ name, ci, age, dateBirth, school });
		return res.json(patient);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// ****************************************************************************
// 										obtencion de varios paciente con busqueda incluida
// ****************************************************************************

const getPatients = async (req, res) => {
	try {
		const patinets = await Patient.findAll();
		return res.json(patinets);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// ****************************************************************************
// 										obtencion de un solo paciente
// ****************************************************************************

const getPatient = async (req, res) => {
	const { id } = req.params;

	try {
		const patient = await Patient.findByPk(id);

		if (!patient) return res.status(404).json({ message: "patient no found" });

		res.json(patient);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updatePatient = async (req, res) => {
	const { id } = req.params;
	const { name, ci, age, dateBirth, school } = req.body;

	try {
		const patient = await Patient.findByPk(id);

		if (name) patient.name = name;
		if (ci) patient.ci = ci;
		if (age) patient.age = age;
		if (dateBirth) patient.dateBirth = dateBirth;
		if (school) patient.school = school;

		await patient.save();

		return res.json(patient);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// // ToDO: crear primero la api de los representantes

// const jointPatientWithRepresentative = async (req, res) => {
// 	const { id, representativeId } = req.params;

// 	const patient = await Patient.findByPk(id);

// 	const representative = await Representative.findByPk(representativeId);

// 	await patient.addRepresentatives(representative);

// 	res.status(200).json({ message: "was make a join" });
// };

// const unjointPatientWithRepresentative = async (req, res) => {
// 	const { id, representativeId } = req.params;

// 	const patient = await Patient.findByPk(id);

// 	const representative = await Representative.findByPk(representativeId);

// 	await patient.removeRepresentatives(representative);

// 	res.status(200).json({ message: "was destroy a join" });
// };

// ****************************************************************************
// 				marcado como eliminado (cambio propidad estatus de registro)
// ****************************************************************************

// la primera peticion marca como eliminado el registro
// en la segunda consulta se eliminara permanentemente de la base de datos

const deletePatient = async (patientId) => {
	const id = rpatientId;

	const patient = await Patient.findByPk(id);

  // marcar como eliminado

	// await patient.destroy()

	res.send("a Patient move to trash");
};

// module.exports = {
// 	createPatient,
// 	getPatients,
// 	getPatient,
// 	updatePatient,
// 	deletePatient,
// };
