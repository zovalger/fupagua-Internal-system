// ****************************************************************************
// 							archivo para ejecutar funciones despues de que se
// 							active completamente el servidor
// ****************************************************************************

const { backupAll, backupRestore } = require("./backup");
const app = require("./app");
const { PORT, NODE_ENV } = require("./config");
const db = require("./db");
const Seed = require("./utils/seed");
const { ImageSyncCloud } = require("./services/ImageService");
const corrutineSecundPlane = require("./services/SubServices_server");

const conectToDataBase = async () => {
	try {
		await db.authenticate();
		console.log("conexion exitosa a la base de datos");

		if (NODE_ENV === "development") {
			// await db.sync();

			// await db.sync({ alter: true, force: true });
			// await Seed();
			// await backupRestore();
		}

		app.listen(PORT);

		// setInterval(() => backupAll(), 1000 * 60 * 10);


		setInterval(() => corrutineSecundPlane(), 30000);

		console.log(`servidor en el puerto: ${PORT}`);
	} catch (error) {
		throw new Error(`conexion fallida a la base de datos \n ${error}`);
	}
};

conectToDataBase();
