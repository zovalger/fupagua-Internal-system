// const Representative = require("../models/Representative.model");

// Representative

const getRepresentatives = (req, res) => {
	res.send("all representatives");
};
const getRepresentative = (req, res) => {
	res.send("one representative");
};

const createRepresentative = (req, res) => {
	res.send("create one representative");
};
const updateRepresentative = (req, res) => {
	res.send("update one representative");
};

const jointRepresentativeWithPatient = (req, res) => {
	res.send("was made a join");
};

const representativeMoveToTrash = (req, res) => {
	res.send("a representative move to trash");
};

const getRepresentativeInTrash = (req, res) => {
	res.send("all representative in trash");
};

const deleteRepresentativeInTrash = (req, res) => {
	res.send("representative in trash as deleted");
};

module.exports = {
	createRepresentative,
	getRepresentatives,
	getRepresentative,
	updateRepresentative,
	jointRepresentativeWithPatient,
	representativeMoveToTrash,
	getRepresentativeInTrash,

	deleteRepresentativeInTrash,
};
