const { DataTypes, Sequelize } = require("sequelize");
const db = require("../db");

const AddressCiudades = db.define("ciudades", {
	id_ciudad: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	id_estado: {
		type: Sequelize.INTEGER,
		references: {
			model: "estados",
			key: "id_estado",
		},
	},
	ciudad: { type: DataTypes.STRING, allowNull: false },
	capital: { type: DataTypes.BOOLEAN },
});

module.exports = AddressCiudades;
