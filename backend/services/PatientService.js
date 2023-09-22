const { Op } = require("sequelize");
const Address = require("../models/Address.model");
const AddressCiudades = require("../models/AddressCiudades.model");
const AddressEstado = require("../models/AddressEstado.model");
const AddressMunicipios = require("../models/AddressMunicipios.model");
const AddressParroquias = require("../models/AddressParroquias.model");
const Patient = require("../models/Patient.model");
const PatientAntFamiliar = require("../models/PatientAntFamiliar.model");
const PatientAntFamiliarIncidencia = require("../models/PatientAntFamiliarIncidencia.model");
const PatientAntFamiliarPariente = require("../models/PatientAntFamiliarPariente.model");
const PatientAntParanatal = require("../models/PatientAntParanatal.model");
const PatientAntPostnatal = require("../models/PatientAntPostnatal.model");
const PatientAntPrenatal = require("../models/PatientAntPrenatal.model");
const Representative = require("../models/Representative.model");
const getBirthdateFromAge = require("../utils/getBirthdateFromAge");
const {
	C_U_D_AntFamiliarOfPatinet_Service,
} = require("./PatientAntFamiliar.Service");
const { calculateAge } = require("../utils/calculateAge");

// Patient
// ****************************************************************************
// 										creacion de paciente
// ****************************************************************************

const createPatient_Service = async (dataPatient, dataRepresentative) => {
	let data = dataPatient;

	// if (!dataRepresentative.id)
	// 	data = { ...data, representative: dataRepresentative };

	try {
		console.log(data);
		const patient = await Patient.create(data);

		const address = await Address.create(data.address);

		await address.setPatient(patient);

		if (dataRepresentative) {
			const representative = !dataRepresentative.id
				? await Representative.create(dataRepresentative)
				: await Representative.findByPk(dataRepresentative.id);

			if (dataRepresentative.id)
				await representative.update(dataRepresentative);

			await patient.setRepresentative(representative);
			await representative.addPatient(patient);
		}

		// return {};
		return patient;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
};

// ****************************************************************************
// 										Patients: todos en la base de datos
// ****************************************************************************

const getAllPatients_Service = async () => {
	try {
		console.log("obtener todos los pacientes");
		const patients = await Patient.findAll({
			where: { status: "a" },
			order: ["name"],
			include: Representative,
		});

		return patients;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 		Patients: obtener los limites para los inputs de busqueda avanzada
// ****************************************************************************

const getPatientSearchLimits_service = async () => {
	try {
		// **************************** obtencion por busqueda ****************
		const limits = {
			historyNumber: { min: Infinity, max: -Infinity },
			age: { min: Infinity, max: -Infinity },
			height: { min: Infinity, max: -Infinity },
			weight: { min: Infinity, max: -Infinity },
			procedenciaType: [],
			procedenciaDiagnostico: [],
			diagnostico: [],
		};

		const patients = await getAllPatients_Service();

		for (const patient of patients) {
			if (patient.procedenciaType) {
				const a = limits.procedenciaType.findIndex(
					(item) => patient.procedenciaType === item
				);
				if (a <= -1) limits.procedenciaType.push(patient.procedenciaType);
			}

			if (patient.procedenciaDiagnostico) {
				const b = limits.procedenciaDiagnostico.findIndex(
					(item) => patient.procedenciaDiagnostico === item
				);
				if (b <= -1)
					limits.procedenciaDiagnostico.push(patient.procedenciaDiagnostico);
			}

			if (patient.diagnostico) {
				const c = limits.diagnostico.findIndex(
					(item) => patient.diagnostico === item
				);
				if (c <= -1) limits.diagnostico.push(patient.diagnostico);
			}

			if (calculateAge(patient.dateBirth) < limits.age.min)
				limits.age.min = calculateAge(patient.dateBirth);

			if (calculateAge(patient.dateBirth) > limits.age.max)
				limits.age.max = calculateAge(patient.dateBirth);

			if (patient.historyNumber < limits.historyNumber.min)
				limits.historyNumber.min = parseInt(patient.historyNumber);

			if (patient.historyNumber > limits.historyNumber.max)
				limits.historyNumber.max = parseInt(patient.historyNumber);

			if (patient.height < limits.height.min)
				limits.height.min = patient.height;

			if (patient.height > limits.height.max)
				limits.height.max = patient.height;

			if (patient.weight < limits.weight.min)
				limits.weight.min = patient.weight;

			if (patient.weight > limits.weight.max)
				limits.weight.max = patient.weight;
		}

		return limits;
	} catch (error) {
		console.log(error);
		return error;
	}
};

// ****************************************************************************
// 					Patients: busqueda por nombre, cedula o numero de historia
// ****************************************************************************

const getPatients_By_SimpleSearch_Service = async (query) => {
	const { name = null, ci = null, historyNumber = null } = query;
	try {
		// **************************** obtencion por busqueda ****************
		console.log("obtencion por filtro");

		const caposPatient = [];
		const caposRepresentative = [];
		const wherePatient = {};
		const whereRepresentative = {};
		const ids = [];

		// vemos si esta cada campo de busqueda
		if (historyNumber)
			caposPatient.push({ historyNumber: { [Op.substring]: historyNumber } });

		if (name) {
			caposRepresentative.push({ name: { [Op.substring]: name } });
			caposPatient.push({ name: { [Op.substring]: name } });
		}

		if (ci) {
			caposRepresentative.push({ ci: { [Op.substring]: ci } });
			caposPatient.push({ ci: { [Op.substring]: ci } });
		}

		// si existen los campos de busqueda se anaden al where de cada tipo de registro
		// hacemos la busqueda en cada tipo de registro
		if (caposPatient.length > 0) {
			wherePatient[Op.or] = caposPatient;

			const pati = await Patient.findAll({
				where: { ...wherePatient, status: "a" },
			});
			console.log(pati);
			if (pati.length > 0) pati.map((patient) => ids.push(patient.id));
		}

		console.log(ids);

		if (caposRepresentative.length > 0) {
			whereRepresentative[Op.or] = caposRepresentative;

			const repre = await Representative.findAll({
				where: { ...whereRepresentative, status: "a" },
				include: Patient,
			});

			if (repre.length > 0)
				repre.map((representative) =>
					representative.patients.map((pa) => ids.push(pa.id))
				);
		}

		const patients = await Patient.findAll({
			where: { id: { [Op.in]: ids } },
			order: ["name"],
			include: Representative,
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
// 									 Patients: busquedas avanzadas
// ****************************************************************************

const getPatients_by_search_Service = async (query) => {
	const {
		or = null,
		sortBy = "name",
		search = null,
		status = "a",
		namePatient = null,
		nameRepresentative = null,
		ciPatient = null,
		ciRepresentative = null,
		historyNumber = null,
		minHistoryNumber = null,
		maxHistoryNumber = null,
		age = null,
		minAge = null,
		maxAge = null,
		height = null,
		minHeight = null,
		maxHeight = null,
		weight = null,
		minWeight = null,
		maxWeight = null,
		sex = null,
		address = {
			id_estado: null,
			id_municipio: null,
			id_parroquia: null,
			id_ciudad: null,
		},
		procedenciaType = null,
		procedenciaDiagnostico = null,
		diagnostico = null,
	} = query;
	try {
		const caposPatient = [];
		const caposRepresentative = [];
		const wherePatient = { status };
		const whereRepresentative = {};
		const ids = [];

		// ****************** altura ******************

		// si hay una Peso en concreto se usa esa Peso
		if (height != null) wherePatient.height = height;
		else {
			// si hay un rango de pesos se buscara ese rango
			if (minHeight != null && maxHeight != null)
				wherePatient.height = {
					[Op.between]: [minHeight, maxHeight],
				};
			else {
				// si no hay un rango de pesos se coloca uno u otro limite

				if (minHeight != null) wherePatient.height = { [Op.gte]: minHeight };

				if (maxHeight != null) wherePatient.height = { [Op.lte]: maxHeight };
			}
		}

		// ****************** peso ******************

		// si hay una Peso en concreto se usa esa Peso
		if (weight != null) wherePatient.weight = weight;
		else {
			// si hay un rango de pesos se buscara ese rango
			if (minWeight != null && maxWeight != null)
				wherePatient.weight = {
					[Op.between]: [minWeight, maxWeight],
				};
			else {
				// si no hay un rango de pesos se coloca uno u otro limite

				if (minWeight != null) wherePatient.weight = { [Op.gte]: minWeight };

				if (maxWeight != null) wherePatient.weight = { [Op.lte]: maxWeight };
			}
		}

		// ****************** numeros de historias ******************

		// si hay una Peso en concreto se usa esa Peso
		if (historyNumber != null) wherePatienthistoryNumberber = historyNumber;
		else {
			// si hay un rango de pesos se buscara ese rango
			if (minHistoryNumber != null && maxHistoryNumber != null)
				wherePatienthistoryNumberber = {
					[Op.between]: [minHistoryNumber, maxHistoryNumber],
				};
			else {
				// si no hay un rango de pesos se coloca uno u otro limite

				if (minHistoryNumber != null)
					wherePatienthistoryNumberber = {
						[Op.gte]: Sequelize.cast(minHistoryNumber, "INTEGER"),
					};

				if (maxHistoryNumber != null)
					wherePatienthistoryNumberber = {
						[Op.lte]: Sequelize.cast(maxHistoryNumber, "INTEGER"),
					};
			}
		}

		// ****************** edad ******************
		// si hay una edad en concreto se usa esa edad
		if (age != null) {
			wherePatient.dateBirth = {
				[Op.between]: [
					getBirthdateFromAge(parseInt(age) + 1),
					getBirthdateFromAge(age),
				],
			};
		} else {
			console.log(getBirthdateFromAge(minAge));
			console.log(getBirthdateFromAge(parseInt(maxAge) + 1));

			// si hay un rango de edades se buscara ese rango
			if (minAge != null && maxAge != null)
				wherePatient.dateBirth = {
					[Op.between]: [
						getBirthdateFromAge(parseInt(maxAge) + 1),
						getBirthdateFromAge(minAge),
					],
				};
			else {
				// si no hay un rango de edades se coloca uno u otro limite

				if (minAge != null)
					wherePatient.dateBirth = {
						[Op.lte]: getBirthdateFromAge(minAge),
					};

				if (maxAge != null)
					wherePatient.dateBirth = {
						[Op.gte]: getBirthdateFromAge(parseInt(maxAge) + 1),
					};
			}
		}

		if (sex != null) wherePatient.sex = sex;
		if (procedenciaType != null) wherePatient.procedenciaType = procedenciaType;
		if (procedenciaDiagnostico != null)
			wherePatient.procedenciaDiagnostico = procedenciaDiagnostico;
		if (diagnostico != null) wherePatient.diagnostico = diagnostico;

		const include = [{ model: Representative, where: whereRepresentative }];

		if (address.id_estado)
			include.push({
				model: Address,
				where: address,
			});

		const patients = await Patient.findAll({
			where: wherePatient,
			order: [sortBy],
			include,
		});

		return patients;
	} catch (error) {
		console.log(error);
		return error;
	}
};

const getAllHistoryNumbersRegisted_service = async () => {
	const historyNumbers = await Patient.findAll({
		attributes: ["id", "historyNumber"],
	});

	return historyNumbers;
};

// ****************************************************************************
// 										obtencion de un solo paciente
// ****************************************************************************

const getPatient_Service = async (patientId) => {
	const id = patientId;

	try {
		const patient = await Patient.findByPk(id, {
			include: [
				{ model: Representative },
				{
					model: Address,
					include: [
						{ model: AddressEstado },
						{ model: AddressMunicipios },
						{ model: AddressCiudades },
						{ model: AddressParroquias },
					],
				},
				{
					model: PatientAntFamiliar,
					as: "antFamiliar",
					include: [
						{ model: PatientAntFamiliarIncidencia, as: "incidencia" },
						{ model: PatientAntFamiliarPariente, as: "pariente" },
					],
				},
				{ model: PatientAntParanatal, as: "antParanatal" },
				{ model: PatientAntPostnatal, as: "antPostnatal" },
				{ model: PatientAntPrenatal, as: "antPrenatal" },
			],
		});

		if (!patient) return null;

		return patient;
	} catch (error) {
		console.log(error);
		return error;
	}
};

const consultPatientHistoryNumber_Service = async (historyNumber) => {
	try {
		const patient = await Patient.findOne({ where: { historyNumber } });

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

	data.representative = undefined;

	if (dataRepresentative) dataRepresentative.id = undefined;

	try {
		const patient = await Patient.findByPk(id, { include: { all: true } });

		if (!patient) return;

		console.log(data);

		await patient.update(data);

		const address = await Address.findOne({ where: { patientId: patient.id } });

		await address.update(data.address);

		if (dataRepresentative !== null) {
			const representative = await Representative.findByPk(
				patient.representativeId
			);

			if (!representative) {
				console.log("no existe el representante");
				let [newRepresentative, create] = await Representative.findOrCreate({
					where: { ci: dataRepresentative.ci },
					defaults: dataRepresentative,
				});

				if (!create) await newRepresentative.update(dataRepresentative);

				await patient.setRepresentative(newRepresentative);
				await newRepresentative.addPatient(patient);

				return patient;
			}

			if (dataRepresentative.ci === representative.ci) {
				console.log("representante modificado");
				await representative.update(dataRepresentative);
			} else {
				console.log("cambio de representante");

				// primero vemos si esta en la base de datos
				let newRepresentative = await Representative.findOne({
					where: { ci: dataRepresentative.ci },
				});

				// quitamos el id para evitar conflictos
				const newDataRepresentative = dataRepresentative;

				// sino esta en la base de datos creamos un nuevo registro
				if (!newRepresentative)
					newRepresentative = await Representative.create(
						newDataRepresentative
					);

				// le asignamos el nuevo representante al paciente
				// si esta lo asignamos al paciente

				await newRepresentative.update(newDataRepresentative);
				await patient.setRepresentative(newRepresentative);
				await newRepresentative.addPatient(patient);

				// si el viejo representante no tiene paciente se elimina

				await representative.removePatient(patient);
				const num = await representative.countPatients();

				console.log(num);

				// if (num <= 0) await representative.destroy();
			}
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
	getAllPatients_Service,

	getPatientSearchLimits_service,
	getPatients_by_search_Service,

	getPatients_By_SimpleSearch_Service,
	consultPatientHistoryNumber_Service,
	getAllHistoryNumbersRegisted_service,
	updatePatient_Service,
	deletePatient_Service,
};
