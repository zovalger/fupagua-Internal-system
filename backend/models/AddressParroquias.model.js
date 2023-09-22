const { DataTypes, Sequelize } = require("sequelize");
const db = require("../db");

const AddressParroquias = db.define("parroquias", {
	id_parroquia: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	id_municipio: {
		type: Sequelize.INTEGER,
		references: {
			model: "municipios",
			key: "id_municipio",
		},
	},
	parroquia: { type: DataTypes.STRING, allowNull: false },
});

module.exports = AddressParroquias;
