const { DataTypes } = require("sequelize");
const db = require("../db");
const Patient = require("./Patient.model");

const PatientAntPrenatal = db.define(
	"patient_antprenatal",
	{
		name: { type: DataTypes.STRING, allowNull: false },
		status: { type: DataTypes.CHAR, defaultValue: "a" },
	},
	{
		getterMethods: {},
		setterMethods: {
			name(value) {
				this.setDataValue("name", value.trim());
			},
			// ci(value) {
			// 	if (!value) return;
			// 	this.setDataValue("ci", value.trim());
			// },
			// dateBirth(value) {
			// 	if (!value) return;
			// 	this.setDataValue("dateBirth", value.trim());
			// },
			// school(value) {
			// 	if (!value) return;
			// 	this.setDataValue("school", value.trim());
			// },
		},
	}
);

Patient.belongsToMany(PatientAntPrenatal, {
	through: "patient_and_prenatal",
	as: "antPrenatal",
});
PatientAntPrenatal.belongsToMany(Patient, {
	through: "patient_and_prenatal",
	as: "patient",
});

module.exports = PatientAntPrenatal;
