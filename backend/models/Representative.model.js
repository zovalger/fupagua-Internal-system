const { DataTypes } = require("sequelize");
const db = require("../db");
const Patient = require("./Patient.model");

const Representative = db.define("representative", {
	name: { type: DataTypes.STRING, allowNull: false },
	ci: { type: DataTypes.STRING, allowNull: false, unique: true },

	age: { type: DataTypes.INTEGER, defaultValue: 0 },
	dateBirth: { type: DataTypes.DATE, allowNull: false },
	// email: { type: DataTypes.STRING, unique: true },
	email: { type: DataTypes.STRING },

	phoneNumber: { type: DataTypes.STRING, allowNull: false, defaultValue: "" },
	address: { type: DataTypes.STRING(500), defaultValue: "" },

	// a: active d:trash
	status: { type: DataTypes.CHAR, defaultValue: "a" },
});

Patient.belongsTo(Representative, {
	foreignKey: "representativeId",
});
Representative.hasMany(Patient, { foreignKey: "patientId" });

module.exports = Representative;
