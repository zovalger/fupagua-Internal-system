const { DataTypes, Sequelize } = require("sequelize");
const db = require("../db");

const AddressMunicipios = db.define("municipios", {
	id_municipio: {
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
	municipio: { type: DataTypes.STRING, allowNull: false },
});

module.exports = AddressMunicipios;
