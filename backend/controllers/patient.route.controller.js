const Patient = require("../models/Patient.model");

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

const getPatient = (req, res) => {
	res.send("one Patient");
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
const updatePatient = (req, res) => {
	res.send("update one Patient");
};

const jointPatientWithRepresentative = (req, res) => {
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
