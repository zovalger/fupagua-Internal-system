const { DataTypes } = require("sequelize");
const db = require("./database");

const User = db.define("user", {
	nombre: {
		type: DataTypes.STRING,
	},
	email: { type: DataTypes.STRING },
	activo: { type: DataTypes.BOOLEAN, defaultValue: true },
	telefono: { type: DataTypes.STRING },
});

module.exports = User;
