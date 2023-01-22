const Book = require("../models/Book.model");
const DataSeed = require("./dataSet");

const Seed = async () => {
	console.log("datos de prueba insertados");

	await Book.bulkCreate(DataSeed.books);
};

module.exports = Seed;
