const { DataTypes } = require("sequelize");
const db = require("../db");
const Patient = require("./Patient.model");

const PatientAntPostnatal = db.define(
	"patient_antpostnatal",
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

Patient.belongsToMany(PatientAntPostnatal, {
	through: "patient_and_postnatal",
	as: "antPostnatal",
});
PatientAntPostnatal.belongsToMany(Patient, {
	through: "patient_and_postnatal",
	as: "patient",
});



module.exports = PatientAntPostnatal;
