const axios = require("axios");
const os = require("os");
// var net = require("net");

const {
	PORT,
	CLOUD_PAGE_URL,
	CLOUD_PAGE_SECRET_CODE_SYNC,
} = require("../config");

// funcion anterior para obtener ip local

// function getNetworkIP(callback) {
// 	var socket = net.createConnection(80, "www.google.com");

// 	socket.on("connect", function () {
// 		callback(undefined, socket.address().address);
// 		socket.end();
// 	});

// 	socket.on("error", function (e) {
// 		callback(e, "error");
// 	});
// }

// obtener la ip local

const getIPLocal = () => {
	const interfaces = os.networkInterfaces();
	const addresses = [];

	for (const iface of Object.values(interfaces)) {
		for (const { address, family } of iface) {
			if (family === "IPv4" && !address.startsWith("127.")) {
				addresses.push(address);
			}
		}
	}

	console.log("IP LAN:", addresses[0]);
	return addresses[0];
};

const getIpServer = () => `${getIPLocal()}:${PORT}`;

// enviar la direccion ip al servidor
const syncUrlServer = async () => {
	const localIp = getIPLocal();
	const url = `http://${localIp}:${PORT}`;

	console.log("Link del servidor:", url);

	if (!CLOUD_PAGE_URL) return;
	if (!CLOUD_PAGE_SECRET_CODE_SYNC) return;

	try {
		if (!localIp) throw new Error("no hay ip");

		const res = await axios.post(`${CLOUD_PAGE_URL}/api/sync/urlLocalServer`, {
			CLOUD_PAGE_SECRET_CODE_SYNC,
			url,
		});

		console.log(res.data);
	} catch (error) {
		console.log(error);
		setTimeout(async () => {
			syncUrlServer();
		}, 60000);
	}
};

module.exports = { syncUrlServer,getIpServer };
