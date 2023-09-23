const ActionsSystem = require("../services/ActionSystemService");
const {
	C_U_D_AntFamiliarOfPatinet_Service,
	getAntFamiliares_By_Patient_Service: getAntFamiliares_By_PatientId_Service,
	getListOfParientesAndIncidencias,
} = require("../services/PatientAntFamiliar.Service");
const {
	C_U_D_AntParanatalOfPatinet_Service,
	getAntParanatal_By_Patient_Service,
	getAllAntParanatal,
} = require("../services/PatientAntParanatal.Service");
const {
	C_U_D_AntPostnatalOfPatinet_Service,
	getAntPostnatal_By_Patient_Service,
	getAllAntPostnatal,
} = require("../services/PatientAntPostnatal.Service");
const {
	C_U_D_AntPrenatalOfPatinet_Service,
	getAntPrenatal_By_Patient_Service,
	getAllAntPrenatal,
} = require("../services/PatientAntPrenatal.Service");
const {
	createPatient_Service,
	getPatients_Service,
	getPatient_Service,
	updatePatient_Service,
	deletePatient_Service,
	consultPatientHistoryNumber_Service,
	getAllHistoryNumbersRegisted_service,
	getPatients_by_search_Service,
	getAllPatients_Service,
	getPatients_By_SimpleSearch_Service,
	getPatientSearchLimits_service,
} = require("../services/PatientService");

// ****************************************************************************
// 										creacion de paciente
// ****************************************************************************

const createPatient_RouteController = async (req, res) => {
	const { patient, representative } = req.body;

	try {
		const newPatient = await createPatient_Service(patient, representative);

		await ActionsSystem.patientCreate(req.user, newPatient);

		return res.json(newPatient);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

// ****************************************************************************
// 																 consultas
// ****************************************************************************

const getAllHistoryNumbersRegisted_controller = async (req, res) => {
	try {
		const listHistoryNumbers = await getAllHistoryNumbersRegisted_service();

		return res.status(200).json(listHistoryNumbers);
	} catch (error) {
		res.status(500).send(error);

		console.log(error);
	}
};

const getPatientSearchLimits_controller = async (req, res) => {
	try {
		const limits = await getPatientSearchLimits_service();

		return res.status(200).json(limits);
	} catch (error) {
		res.status(500).send(error);

		console.log(error);
	}
};
const getPatients_by_search_controller = async (req, res) => {
	try {
		const {
			or,
			sortBy,
			search,
			status,
			namePatient,
			nameRepresentative,
			ciPatient,
			ciRepresentative,
			historyNumber,
			minHistoryNumber,
			maxHistoryNumber,
			age,
			minAge,
			maxAge,
			height,
			minHeight,
			maxHeight,
			weight,
			minWeight,
			maxWeight,
			sex,
			phoneNumberPatient,

			address,
			procedenciaType,
			procedenciaDiagnostico,
			diagnostico,
		} = req.query;


		console.log(address);

		const listHistoryNumbers = await getPatients_by_search_Service({
			or,
			sortBy,
			search,
			status,
			namePatient,
			nameRepresentative,
			ciPatient,
			ciRepresentative,
			historyNumber,
			minHistoryNumber,
			maxHistoryNumber,
			age,
			minAge,
			maxAge,
			height,
			minHeight,
			maxHeight,
			weight,
			minWeight,
			maxWeight,
			sex,
			phoneNumberPatient,
			address,
			procedenciaType,
			procedenciaDiagnostico,
			diagnostico,
		});

		return res.status(200).json(listHistoryNumbers);
	} catch (error) {
		res.status(500).send(error);

		console.log(error);
	}
};

// ****************************************************************************
// 												pacientes:	todos
// ****************************************************************************

const getAllPatients_controller = async (req, res) => {
	// todo: peticiones diferentes por pacientes y representantes
	console.log(req.query);
	try {
		const patinets = await getAllPatients_Service(req.query);
		return res.json(patinets);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

const getPatients_by_simpleSearch_controller = async (req, res) => {
	// todo: peticiones diferentes por pacientes y representantes
	console.log(req.query);
	try {
		const patinets = await getPatients_By_SimpleSearch_Service(req.query);
		return res.json(patinets);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};

// ****************************************************************************
// 										obtencion de un solo paciente
// ****************************************************************************

const getPatient_RouteController = async (req, res) => {
	const { id } = req.params;
	try {
		const patient = await getPatient_Service(id);

		if (!patient) return res.status(404).json({ message: "patient no found" });
		res.json(patient);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const consultPatientHistoryNumber_RouteController = async (req, res) => {
	const { historyNumber } = req.query;
	try {
		const patient = await consultPatientHistoryNumber_Service(historyNumber);

		if (!patient)
			return res
				.status(404)
				.send({ error: "no hay un paciente con ese numero de historia" });

		return res.status(200).json(patient);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

// ****************************************************************************
// 										actualizacion del registro de un solo paciente
// ****************************************************************************

const updatePatient_RouteController = async (req, res) => {
	const { id } = req.params;
	const { patient, representative } = req.body;

	try {
		const updatePatient = await updatePatient_Service(
			id,
			patient,
			representative
		);

		if (!updatePatient) return res.status(404).json({ message: "not found" });

		await ActionsSystem.patientUpdate(req.user, updatePatient);

		return res.json(updatePatient);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
};
// ****************************************************************************
// 				marcado como eliminado (cambio propidad estatus de registro)
// ****************************************************************************

// la primera peticion marca como eliminado el registro
// en la segunda consulta se eliminara permanentemente de la base de datos

const deletePatient_RouteController = async (req, res) => {
	const { id } = req.params;

	const patient = await deletePatient_Service(id);

	if (!patient) return res.status(404).json(patient);

	await ActionsSystem.patientDelete(req.user, patient);

	return res.json(patient);
};

// ****************************************************************************
// 								crud de los antecedentes familiares
// ****************************************************************************

const createOrUpdateAntFamiliar_controller = async (req, res) => {
	const { patientId } = req.params;
	const data = req.body;

	try {
		const ants = await C_U_D_AntFamiliarOfPatinet_Service(patientId, data);

		if (!ants) return res.status(404).json(ants);

		return res.status(200).json(ants);
	} catch (error) {
		console.log(error);
	}
};

const getAntFamiliaresByPatientId_controller = async (req, res) => {
	const { patientId } = req.params;

	try {
		const ants = await getAntFamiliares_By_PatientId_Service(patientId);

		if (!ants) return res.status(404).json(ants);

		return res.status(200).json(ants);
	} catch (error) {
		console.log(error);
	}
};

const getListAntFamiliares_controller = async (req, res) => {
	try {
		const ants = await getListOfParientesAndIncidencias();

		if (!ants) return res.status(404).json(ants);

		return res.status(200).json(ants);
	} catch (error) {
		console.log(error);
	}
};

// ****************************************************************************
// 								crud de los antecedentes paranatales
// ****************************************************************************

const createOrUpdateAntParanatal_controller = async (req, res) => {
	const { patientId } = req.params;
	const data = req.body;

	try {
		const ants = await C_U_D_AntParanatalOfPatinet_Service(patientId, data);

		if (!ants) return res.status(404).json(ants);

		return res.status(200).json(ants);
	} catch (error) {
		console.log(error);
	}
};

const getAntParanatalByPatientId_controller = async (req, res) => {
	const { patientId } = req.params;

	try {
		const ants = await getAntParanatal_By_Patient_Service(patientId);

		if (!ants) return res.status(404).json(ants);

		return res.status(200).json(ants);
	} catch (error) {
		console.log(error);
	}
};

const getListAntParanatal_controller = async (req, res) => {
	try {
		const ants = await getAllAntParanatal();

		if (!ants) return res.status(404).json(ants);

		return res.status(200).json(ants);
	} catch (error) {
		console.log(error);
	}
};

// ****************************************************************************
// 								crud de los antecedentes postnatales
// ****************************************************************************

const createOrUpdateAntPostnatal_controller = async (req, res) => {
	const { patientId } = req.params;
	const data = req.body;

	try {
		const ants = await C_U_D_AntPostnatalOfPatinet_Service(patientId, data);

		if (!ants) return res.status(404).json(ants);

		return res.status(200).json(ants);
	} catch (error) {
		console.log(error);
	}
};

const getAntPostnatalByPatientId_controller = async (req, res) => {
	const { patientId } = req.params;

	try {
		const ants = await getAntPostnatal_By_Patient_Service(patientId);

		if (!ants) return res.status(404).json(ants);

		return res.status(200).json(ants);
	} catch (error) {
		console.log(error);
	}
};

const getListAntPostnatal_controller = async (req, res) => {
	try {
		const ants = await getAllAntPostnatal();

		if (!ants) return res.status(404).json(ants);

		return res.status(200).json(ants);
	} catch (error) {
		console.log(error);
	}
};
// ****************************************************************************
// 								crud de los antecedentes prenatales
// ****************************************************************************

const createOrUpdateAntPrenatal_controller = async (req, res) => {
	const { patientId } = req.params;
	const data = req.body;

	try {
		const ants = await C_U_D_AntPrenatalOfPatinet_Service(patientId, data);

		if (!ants) return res.status(404).json(ants);

		return res.status(200).json(ants);
	} catch (error) {
		console.log(error);
	}
};

const getAntPrenatalByPatientId_controller = async (req, res) => {
	const { patientId } = req.params;

	try {
		const ants = await getAntPrenatal_By_Patient_Service(patientId);

		if (!ants) return res.status(404).json(ants);

		return res.status(200).json(ants);
	} catch (error) {
		console.log(error);
	}
};

const getListAntPrenatal_controller = async (req, res) => {
	try {
		const ants = await getAllAntPrenatal();

		if (!ants) return res.status(404).json(ants);

		return res.status(200).json(ants);
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	createPatient_RouteController,
	getAllPatients_controller,
	getPatient_RouteController,
	updatePatient_RouteController,
	deletePatient_RouteController,
	getPatients_by_search_controller,
	getPatients_by_simpleSearch_controller,

	// utilidades

	consultPatientHistoryNumber_RouteController,
	getAllHistoryNumbersRegisted_controller,
	getPatientSearchLimits_controller,

	// antecedentes
	// familiares
	createOrUpdateAntFamiliar_controller,
	getListAntFamiliares_controller,
	getAntFamiliaresByPatientId_controller,

	// paranatales
	getAntParanatalByPatientId_controller,
	getListAntParanatal_controller,
	createOrUpdateAntParanatal_controller,

	// postnatales
	createOrUpdateAntPostnatal_controller,
	getAntPostnatalByPatientId_controller,
	getListAntPostnatal_controller,

	// prenatales
	createOrUpdateAntPrenatal_controller,
	getAntPrenatalByPatientId_controller,
	getListAntPrenatal_controller,
};
