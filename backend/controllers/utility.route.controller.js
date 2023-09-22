const axios = require("axios");
const cheerio = require("cheerio");
const Representative = require("../models/Representative.model");
const { toUpperCamelCase } = require("../utils/strUpperCamelCase");
const { getIpServer } = require("../services/syncUrlServer");

const consultCI_in_DB = async (req, res, next) => {
	const { ci } = req.query;

	try {
		const representative = await Representative.findOne({ where: { ci } });

		if (representative) return res.status(200).json(representative);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}

	if (next) return next();
};

const consultCI_in_CNE = async (req, res) => {
	const { ci } = req.query;

	const url = `http://www.cne.gob.ve/web/registro_civil/buscar_rep.php?nac=V&ced=${ci}`;

	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url,
		headers: {},
	};

	try {
		const { data: html } = await axios(config);

		const $ = cheerio.load(html);

		const name = toUpperCamelCase($("b").text());

		console.log(name);

		if (!name) return res.status(404).send("");

		return res.status(200).send(name);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

const getIpServer_controller = async (req, res) => {
	const { ci } = req.query;

	try {
		const ipServer = getIpServer();

		return res.status(200).send(ipServer);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}

	if (next) return next();
};

module.exports = { consultCI_in_DB, consultCI_in_CNE, getIpServer_controller };
