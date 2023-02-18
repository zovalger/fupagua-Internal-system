const fs = require("fs-extra");

const Book = require("./models/Book.model");
const Patient = require("./models/Patient.model");
const { createBook_Service } = require("./services/BookService");
const backupPath = "./backup/backup.json";

const backupAll = async () => {
	// const b = await fs.readJSON(backupPath);

	const data = {};

	data.Books = await Book.findAll({ include: { all: true } });
	data.Patients = await Patient.findAll({ include: { all: true } });

	await fs.writeJSON(backupPath, data);

	console.log("Respaldo de la base de datos realizado");
};

const backupRestore = async () => {
	const data = await fs.readJSON(backupPath);

	// await data.Book.map((book) => createBook_Service(book));
	// console.log("base de datos restaurada desde el backup");

	console.log("codigo para restaurar la base de datos no creado");
};

module.exports = { backupAll, backupRestore };