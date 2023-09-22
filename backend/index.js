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
const { syncUrlServer } = require("./services/syncUrlServer");

const conectToDataBase = async () => {
	try {
		await db.authenticate();
		console.log("conexion exitosa a la base de datos");

		if (NODE_ENV !== "production") {
			// await db.sync();
			// await db.sync({ alter: true });
			// await db.sync({ alter: true, force: true });
			// await Seed();
			// await backupRestore();
		}

		app.listen(PORT);

		console.log(`servidor iniciado exitosamente en el puerto: ${PORT}`);

		// mandar url a la pagina de fupagua para actualizar el link
		syncUrlServer();

		if (NODE_ENV === "production") {
			await backupAll();
		}
		setInterval(() => corrutineSecundPlane(), 1 * 60 * 1000);
	} catch (error) {
		throw new Error(`conexion fallida a la base de datos \n ${error}`);
	}
};

conectToDataBase();
