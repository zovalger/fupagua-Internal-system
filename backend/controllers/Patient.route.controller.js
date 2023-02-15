const {
	createPatient_Service,
	getPatients_Service,
	getPatient_Service,
	updatePatient_Service,
	deletePatient_Service,
	consultPatientHistoryNumber_Service,
} = require("../services/PatientService");

// ****************************************************************************
// 										creacion de paciente
// ****************************************************************************

const createPatient_RouteController = async (req, res) => {
	const { patient, representative } = req.body;

	try {
		const newPatient = await createPatient_Service(patient, representative);

		return res.json(newPatient);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
};

// ****************************************************************************
// 										obtencion de varios paciente con busqueda incluida
// ****************************************************************************

const getPatients_RouteController = async (req, res) => {
	// todo: peticiones diferentes por pacientes y representantes
	console.log(req.query);
	try {
		const patinets = await getPatients_Service(req.query);
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
	const { historyNumber } = req.params;
	try {
		const result = await consultPatientHistoryNumber_Service(historyNumber);

		
		res.status(200).json({ result });
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
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

	return res.json(patient);
};

module.exports = {
	createPatient_RouteController,
	getPatients_RouteController,
	getPatient_RouteController,
	consultPatientHistoryNumber_RouteController,
	updatePatient_RouteController,
	deletePatient_RouteController,
};
