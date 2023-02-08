const axios = require("axios");
const cheerio = require("cheerio");

const consultCI = (req, res) => {
	const { ci } = req.query;

	let config = {
		method: "get",
		maxBodyLength: Infinity,
		url: `http://www.cne.gob.ve/web/registro_civil/buscar_rep.php?nac=V&ced=${ci}`,
		headers: {},
	};

	axios(config)
		.then((response) => {
			let html = response.data;

			const $ = cheerio.load(html);

			let name = $("b").text();
			console.log(name);

			if (!name) return res.status(404).send("");

			return res.status(200).send(name);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).send(error);
		});
};

module.exports = { consultCI };
