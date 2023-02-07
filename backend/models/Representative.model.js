const { DataTypes } = require("sequelize");
const db = require("../db");
const Patient = require("./Patient.model");

const Representative = db.define("representative", {
	name: { type: DataTypes.STRING, allowNull: false },
	ci: { type: DataTypes.STRING, allowNull: false },

	age: DataTypes.INTEGER,
	dateBirth: DataTypes.DATE,
	email: { type: DataTypes.STRING, unique: true },
	phoneNumber: { type: DataTypes.STRING, allowNull: false },

	// a: active d:trash
	status: { type: DataTypes.CHAR, defaultValue: "a" },
});

Representative.belongsToMany(Patient,{through:"representativejoin"});

Patient.hasOne(Representative);

module.exports = Representative;

