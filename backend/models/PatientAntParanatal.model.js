const { DataTypes } = require("sequelize");
const db = require("../db");
const Patient = require("./Patient.model");

const PatientAntParanatal = db.define(
	"patient_antparanatal",
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

Patient.belongsToMany(PatientAntParanatal, {
	through: "patient_and_antparanatal",
	as: "antParanatal",
});
PatientAntParanatal.belongsToMany(Patient, {
	through: "patient_and_antparanatal",
	as: "patient",
});



module.exports = PatientAntParanatal;
