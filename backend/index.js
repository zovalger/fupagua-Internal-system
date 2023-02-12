// ****************************************************************************
// 							archivo para ejecutar funciones despues de que se
// 							active completamente el servidor
// ****************************************************************************

const { backupAll, backupRestore } = require("./backup");
const app = require("./app");
const { PORT, NODE_ENV } = require("./config");
const db = require("./db");
const Seed = require("./utils/seed");

const conectToDataBase = async () => {
	try {
		await db.authenticate();
		console.log("conexion exitosa a la base de datos");

		if (NODE_ENV === "development") {
			await db.sync({ alter: true, force: true });
			await Seed();
			// await backupRestore();
		}

		app.listen(PORT);

		// setInterval(() => backupAll(), 1000 * 60 * 10);

		console.log(`servidor en el puerto: ${PORT}`);
	} catch (error) {
		throw new Error(`conexion fallida a la base de datos \n ${error}`);
	}
};

conectToDataBase();
