const { DataTypes } = require("sequelize");
const db = require("../db");

const patient = db.define("patient", {
	name: { type: DataTypes.STRING, allowNull: false },

	ci: { type: DataTypes.STRING, unique: true, allowNull: false },

	age: DataTypes.INTEGER,

	dateBirth: DataTypes.DATE,

	email: { type: DataTypes.STRING, unique: true },

	phoneNumber: { type: DataTypes.STRING, allowNull: false },
});




module.exports = patient;
