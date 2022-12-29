const Patient = require("../models/Patient.model");
const Representative = require("../models/Representative.model");

// Representative

const getRepresentatives = async (req, res) => {
	try {
		const representative = await Representative.findAll();
		return res.json(representative);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const getRepresentative = async (req, res) => {
	const { id } = req.params;

	try {
		const representative = await Representative.findByPk(id, {
			include: { model: Patient },
		});

		if (!representative)
			return res.status(404).json({ message: "representative no found" });

		res.json(representative);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const createRepresentative = async (req, res) => {
	const { name, ci, age, dateBirth, email, phoneNumber } = req.body;

	try {
		const representative = await Representative.create({
			name,
			ci,
			age,
			dateBirth,
			email,
			phoneNumber,
		});

		return res.json(representative);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const updateRepresentative = async (req, res) => {
	const { id } = req.params;
	const { name, ci, age, dateBirth, email, phoneNumber } = req.body;

	try {
		const representative = await Representative.findByPk(id);

		if (name) representative.name = name;
		if (ci) representative.ci = ci;
		if (age) representative.age = age;
		if (dateBirth) representative.dateBirth = dateBirth;
		if (email) representative.email = email;
		if (phoneNumber) representative.phoneNumber = phoneNumber;

		await representative.save();
		return res.json(representative);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const jointRepresentativeWithPatient = async (req, res) => {
	const { id, patientId } = req.params;

	const representative = await Representative.findByPk(id);

	const patient = await Patient.findByPk(patientId);

	await representative.addPatients(patient);

	res.status(200).json({ message: "was make a join" });
};
const unjointRepresentativeWithPatient = async (req, res) => {
	const { id, patientId } = req.params;

	const representative = await Representative.findByPk(id);

	const patient = await Patient.findByPk(patientId);

	await representative.removePatients(patient);

	res.status(200).json({ message: "was destroy a join" });
};

const deleteRepresentative = (req, res) => {
	res.send("representative in trash as deleted");
};

const representativeMoveToTrash = (req, res) => {
	res.send("a representative move to trash");
};

const getRepresentativeInTrash = (req, res) => {
	res.send("all representative in trash");
};

const deleteRepresentativeInTrash = (req, res) => {
	res.send("representative in trash as deleted");
};

module.exports = {
	createRepresentative,
	getRepresentatives,
	getRepresentative,
	updateRepresentative,
	jointRepresentativeWithPatient,
	unjointRepresentativeWithPatient,
	representativeMoveToTrash,
	getRepresentativeInTrash,
	deleteRepresentative,
	deleteRepresentativeInTrash,
};
