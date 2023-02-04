const { Op } = require("sequelize");
const Patient = require("../models/Patient.model");
const Representative = require("../models/Representative.model");

// Patient
// ****************************************************************************
// 										creacion de paciente
// ****************************************************************************

const createPatient_Service = async (dataPatient, dataRepresentative) => {
	let data = dataPatient;

	console.log(dataPatient);

	console.log(dataRepresentative);

	if (dataRepresentative)
		data = { ...data, representative: dataRepresentative };

	try {
		const patient = await Patient.create(data, {
			include: { all: true },
		});

		return patient;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										obtencion de varios paciente con busqueda incluida
// ****************************************************************************

const getPatients_Service = async (query) => {
	const { name, ci, historyNumber } = query;

	const datos = [];
	const where = {};
	const ids = [];

	if (name) datos.push({ name: { [Op.substring]: name } });
	if (ci) datos.push({ ci: { [Op.substring]: ci } });
	if (historyNumber)
		datos.push({ historyNumber: { [Op.substring]: historyNumber } });

	if (datos.length > 0) where[Op.or] = datos;

	try {
		const pati = await Patient.findAll({ where });
		const repre = await Representative.findAll({ where });

		if (pati.length > 0) pati.map((patient) => ids.push(patient.id));

		if (repre.length > 0)
			repre.map((representative) => ids.push(representative.patientId));

		const patients = await Patient.findAll({
			where: { id: { [Op.in]: ids } },
			order: ["name"],
		});

		console.log(pati);
		console.log(repre);
		console.log(ids);
		console.log(patients);

		return patients;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										obtencion de un solo paciente
// ****************************************************************************

const getPatient_Service = async (patientId) => {
	const id = patientId;

	try {
		const patient = await Patient.findByPk(id, { include: { all: true } });

		if (!patient) return null;

		return patient;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updatePatient_Service = async (
	patientId,
	dataPatient,
	dataRepresentative
) => {
	const data = dataPatient;
	const id = patientId;

	try {
		const patient = await Patient.findByPk(id, { include: { all: true } });

		if (!patient) return null;

		await patient.update(data);

		if (dataRepresentative) {
			const representative = await Representative.findByPk(
				patient.representative.id
			);

			if (representative) await representative.update(dataRepresentative);
		}

		return patient;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 				marcado como eliminado (cambio propidad estatus de registro)
// ****************************************************************************

// la primera peticion marca como eliminado el registro
// en la segunda consulta se eliminara permanentemente de la base de datos

const deletePatient_Service = async (patientId) => {
	const id = patientId;

	const patient = await Patient.findByPk(id);

  if (!patient ) return null

	if (patient.status === "a") {
		patient.status = "d";
		await patient.save();
		return patient;
	} else {
		await patient.destroy();
		return { message: "eliminado" };
	}
};

module.exports = {
	createPatient_Service,
	getPatient_Service,
	getPatients_Service,
	updatePatient_Service,
	deletePatient_Service,
};
