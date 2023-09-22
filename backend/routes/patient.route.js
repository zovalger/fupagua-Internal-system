const express = require("express");
const router = express.Router();
const validatePatientData = require("../validators/patients/patientsValidator");
const { authUser } = require("../middleware/authUser");

const validateHistoryNumber = require("../validators/patients/historyNumberValidator");
const validateRepresentativeData = require("../validators/patients/representativeValidator");
const simpleQueryValidator = require("../validators/patients/simpleQueryValidator");
const {
	patientsAntecedentesValidator,
	patientsAntecedentesFamiliarValidator,
} = require("../validators/patients/patientsAntecedentesValidator");

const {
	getPatient_RouteController,
	createPatient_RouteController,
	updatePatient_RouteController,
	deletePatient_RouteController,
	consultPatientHistoryNumber_RouteController,
	createOrUpdateAntFamiliar_controller,
	getAntFamiliaresByPatientId_controller,
	createOrUpdateAntParanatal_controller,
	getAntParanatalByPatientId_controller,
	createOrUpdateAntPostnatal_controller,
	getAntPostnatalByPatientId_controller,
	createOrUpdateAntPrenatal_controller,
	getAntPrenatalByPatientId_controller,
	getListAntFamiliares_controller,
	getListAntParanatal_controller,
	getListAntPostnatal_controller,
	getListAntPrenatal_controller,
	getAllHistoryNumbersRegisted_controller,
	getPatients_by_search_controller,

	getAllPatients_controller,
	getPatients_by_simpleSearch_controller,
	getPatientSearchLimits_controller,
} = require("../controllers/Patient.route.controller");
const avanzadeQueryValidator = require("../validators/patients/avanzadeQueryValidator");

router.get("/search", authUser,avanzadeQueryValidator, getPatients_by_search_controller);
router.get(
	"/search/simple",
	authUser,
	simpleQueryValidator,
	getPatients_by_simpleSearch_controller
);

router.get("/search-limits", authUser, getPatientSearchLimits_controller);

router.get(
	"/historyNumber",
	authUser,
	validateHistoryNumber,
	consultPatientHistoryNumber_RouteController
);

router.get(
	"/historyNumber/all",
	authUser,
	getAllHistoryNumbersRegisted_controller
);

// obtencion de las listas de antecedentes

router.get("/antFamiliar", authUser, getListAntFamiliares_controller);
router.get("/antParanatal", authUser, getListAntParanatal_controller);
router.get("/antPostnatal", authUser, getListAntPostnatal_controller);
router.get("/antPrenatal", authUser, getListAntPrenatal_controller);

// Antecedentes familiares

router.get(
	"/:patientId/antFamiliar",
	authUser,
	getAntFamiliaresByPatientId_controller
);
router.post(
	"/:patientId/antFamiliar",
	authUser,
	patientsAntecedentesFamiliarValidator,
	createOrUpdateAntFamiliar_controller
);

// Antecedentes Paranatal

router.get(
	"/:patientId/antParanatal",
	authUser,
	getAntParanatalByPatientId_controller
);
router.post(
	"/:patientId/antParanatal",
	authUser,
	patientsAntecedentesValidator,
	createOrUpdateAntParanatal_controller
);

// Antecedentes Postnatal

router.get(
	"/:patientId/antPostnatal",
	authUser,
	getAntPostnatalByPatientId_controller
);
router.post(
	"/:patientId/antPostnatal",
	authUser,
	patientsAntecedentesValidator,
	createOrUpdateAntPostnatal_controller
);

// Antecedentes Prenatal

router.get(
	"/:patientId/antPrenatal",
	authUser,
	getAntPrenatalByPatientId_controller
);
router.post(
	"/:patientId/antPrenatal",
	authUser,
	patientsAntecedentesValidator,
	createOrUpdateAntPrenatal_controller
);

// Datos de los pacientes

router.get("/:id", authUser, getPatient_RouteController);
router.put(
	"/:id",
	authUser,
	validatePatientData,
	validateRepresentativeData,
	updatePatient_RouteController
);
router.delete("/:id", authUser, deletePatient_RouteController);
router.post(
	"/",
	authUser,
	validatePatientData,
	validateRepresentativeData,
	createPatient_RouteController
);
router.get("/", authUser, getAllPatients_controller);

module.exports = router;
