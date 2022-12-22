// ****************************************************************************
// 							archivo para ejecutar funciones despues de que se
// 							active completamente el servidor
// ****************************************************************************

const app = require("./app");
const { PORT } = require("./config");
const db = require("./db");

const conectToDataBase = async () => {
	try {
		await db.authenticate();
		console.log("conexion exitosa");

		await db.sync({ force: true }); // actualiza las columnas de las tablas pero borra la base de datos

		app.listen(PORT);

		console.log(`servidor en el puerto: ${PORT}`);
	} catch (error) {
		throw new Error(`conexion fallida a la base de datos \n ${error}`);
	}
};

conectToDataBase();
