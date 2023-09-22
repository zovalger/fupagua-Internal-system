const Book = require("../models/Book.model");
const Patient = require("../models/Patient.model");
const { createBook_Service } = require("../services/BookService");
const { createPatient_Service } = require("../services/PatientService");

const DataSeed = require("./dataSet");

const Seed = async () => {
	await DataSeed.books.map((book) => createBook_Service(book));

	await DataSeed.patients.map(async (patient) => {
		const { representative } = patient;

		// patient.representative = undefined;
		// patient.representativeId = undefined;
		// patient.patientId = undefined;

		await createPatient_Service(patient, representative);
	});

	await console.log("datos de prueba insertados");
};

module.exports = Seed;
