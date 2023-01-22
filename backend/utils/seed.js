const Book = require("../models/Book.model");
const DataSeed = require("./dataSet");

const Seed = async () => {
	await Book.bulkCreate(DataSeed);
};

module.exports = Seed;
