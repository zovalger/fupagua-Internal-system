const Patient = require("../models/Patient.model");
const Representative = require("../models/Representative.model");

// Patient

const getPatients = async (req, res) => {
	try {
		const patinets = await Patient.findAll();
		return res.json(patinets);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

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

// ToDO: crear primero la api de los representantes

const jointPatientWithRepresentative = async (req, res) => {
	const { id, representativeId } = req.params;

	const patient = await Patient.findByPk(id);

	const representative = await Representative.findByPk(representativeId);

	await patient.addRepresentatives(representative);

	console.log(patient.getRepresentatives());

	res.send("was made a join");
};

const patientMoveToTrash = (req, res) => {
	res.send("a Patient move to trash");
};

const getPatientInTrash = (req, res) => {
	res.send("all Patient in trash");
};

const deletePatientInTrash = (req, res) => {
	res.send("Patient in trash as deleted");
};

module.exports = {
	createPatient,
	getPatients,
	getPatient,
	updatePatient,
	jointPatientWithRepresentative,
	patientMoveToTrash,
	getPatientInTrash,
	deletePatientInTrash,
};
