const { DataTypes } = require("sequelize");
const db = require("../db");
const Patient = require("./Patient.model");

const Representative = db.define("Representative", {
	name: { type: DataTypes.STRING, allowNull: false },

	ci: { type: DataTypes.STRING, unique: true, allowNull: false },

	age: DataTypes.INTEGER,

	dateBirth: DataTypes.DATE,

	email: { type: DataTypes.STRING, unique: true },

	// status: DataTypes.CHAR, // a: active d:delete

	phoneNumber: { type: DataTypes.STRING, allowNull: false },
});


Representative.belongsToMany(Patient, { through: "PatientRepresentative" });
Patient.belongsToMany(Representative, { through: "PatientRepresentative" });

module.exports = Representative;
