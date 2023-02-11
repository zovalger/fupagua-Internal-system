const { Op } = require("sequelize");
const Patient = require("../models/Patient.model");
const Representative = require("../models/Representative.model");

// Patient
// ****************************************************************************
// 										creacion de paciente
// ****************************************************************************

const createPatient_Service = async (dataPatient, dataRepresentative) => {
	let data = dataPatient;

	// if (!dataRepresentative.id)
	// 	data = { ...data, representative: dataRepresentative };

	try {
		const patient = await Patient.create(data);

		const representative = !dataRepresentative.id
			? await Representative.create(dataRepresentative)
			: await Representative.findByPk(dataRepresentative.id);

		if (dataRepresentative.id) await representative.update(dataRepresentative);

		await patient.setRepresentative(representative);

		// return {};
		return patient;
	} catch (error) {
		console.log(error);
		throw new Error(error);
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
			include: { all: true },
		});

		// console.log(pati);
		// console.log(repre);
		// console.log(ids);
		// console.log(patients);

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

		if (!patient) return;

		await patient.update(data);

		const representative = await Representative.findByPk(
			patient.representativeId
		);

		if (!representative) {
			console.log("no existe el representante");
			let newRepresentative = await Representative.create(dataRepresentative);
			await patient.setRepresentative({ newRepresentative });
			return;
		}

		if (dataRepresentative.ci === representative.ci) {
			console.log("repreentante modificado");
			await representative.update(dataRepresentative);
		} else {

			console.log("cambio de representante");

			// primero vemos si esta en la base de datos
			let newRepresentative = await Representative.findOne({
				where: { ci: dataRepresentative.ci },
			});

			// quitamos el id para evitar conflictos
			const newDataRepresentative = { ...dataRepresentative, id: undefined };

			// sino esta en la base de datos creamos un nuevo registro
			if (!newRepresentative)
				newRepresentative = await Representative.create(newDataRepresentative);

			// le asignamos el nuevo representante al paciente
			// si esta lo asignamos al paciente

			await patient.setRepresentative({ newRepresentative });

			// si el viejo representante no tiene paciente se elimina

			const num = await representative.countPatients();

			console.log(num);

			if (num <= 0) await representative.destroy();

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

	if (!patient) return null;

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
