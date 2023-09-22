const fs = require("fs-extra");

const Book = require("./models/Book.model");
const Patient = require("./models/Patient.model");
const Address = require("./models/Address.model");
const BookFicha = require("./models/BookFicha.model");
const CategoryVideo = require("./models/VideoLinkCategory.model");
const VideoLink = require("./models/VideoLink.model");
const UserLogs = require("./models/UserLogs.model");
const User = require("./models/User.model");
const PatientAntPrenatal = require("./models/PatientAntPrenatal.model");
const Representative = require("./models/Representative.model");
const PatientAntPostnatal = require("./models/PatientAntPostnatal.model");
const PatientAntParanatal = require("./models/PatientAntParanatal.model");
const PatientAntFamiliarPariente = require("./models/PatientAntFamiliarPariente.model");
const PatientAntFamiliarIncidencia = require("./models/PatientAntFamiliarIncidencia.model");
const PatientAntFamiliar = require("./models/PatientAntFamiliar.model");
const ImgFile = require("./models/ImgFile.model");
const FupaguaService = require("./models/FupaguaService.model");
const FupaguaEmpleado = require("./models/FupaguaEmpleado.model");
const EventPost = require("./models/EventPost.model");
const BookRecommendedCategory = require("./models/BookRecommendedCategory.model");
const BookRecommended = require("./models/BookRecommended.model");
const dirPathBackup = "./backup";

const backupAll = async () => {
	try {
		// const b = await fs.readJSON(backupPath);

		const data = {};

		data.Books = await Book.findAll({ include: { all: true } });
		data.Patients = await Patient.findAll();
		data.Address = await Address.findAll();
		data.BookFicha = await BookFicha.findAll();

		data.BookRecommended = await BookRecommended.findAll();
		data.BookRecommendedCategory = await BookRecommendedCategory.findAll();
		//Employee
		data.EventPost = await EventPost.findAll();
		data.FupaguaEmpleado = await FupaguaEmpleado.findAll();
		data.FupaguaService = await FupaguaService.findAll();
		data.ImgFile = await ImgFile.findAll();
		data.PatientAntFamiliar = await PatientAntFamiliar.findAll();
		data.PatientAntFamiliarIncidencia =
			await PatientAntFamiliarIncidencia.findAll();
		data.PatientAntFamiliarPariente =
			await PatientAntFamiliarPariente.findAll();
		data.PatientAntParanatal = await PatientAntParanatal.findAll();
		data.PatientAntPostnatal = await PatientAntPostnatal.findAll();
		data.PatientAntPrenatal = await PatientAntPrenatal.findAll();
		data.Representative = await Representative.findAll();
		data.User = await User.findAll();
		data.UserLogs = await UserLogs.findAll();
		data.VideoLink = await VideoLink.findAll();
		data.CategoryVideo = await CategoryVideo.findAll();

		await fs.writeJSON(
			`${dirPathBackup}/fupagua-internal-system_backup_${new Date().toDateString()}.json`,
			data
		);
		

		console.log("Respaldo de la base de datos realizado");
	} catch (error) {
		console.log(error);
	}
};

const backupRestore = async () => {
	const data = await fs.readJSON(dirPathBackup);

	// await data.Book.map((book) => createBook_Service(book));
	// console.log("base de datos restaurada desde el backup");

	console.log("codigo para restaurar la base de datos; no creado");
};

module.exports = { backupAll, backupRestore };
