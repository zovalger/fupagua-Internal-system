const Book = require("../models/Book.model");
const { createBook_Service } = require("../services/Book.service");
const DataSeed = require("./dataSet");

const Seed = async () => {
	
	await DataSeed.books.map((book) => createBook_Service(book));
	console.log("datos de prueba insertados");
};

module.exports = Seed;
