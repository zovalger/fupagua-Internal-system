const { DataTypes, Sequelize } = require("sequelize");
const db = require("../db");

const AddressEstado = db.define("estados", {
	id_estado: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	estado: { type: DataTypes.STRING, allowNull: false },
	["iso_3166-2"]: { type: DataTypes.STRING },
});

module.exports = AddressEstado;
