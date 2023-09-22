const { DataTypes } = require("sequelize");
const db = require("../db");
const Patient = require("./Patient.model");

const PatientAntFamiliarPariente = db.define(
	"patient_antfamiliar_pariente",
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

// Patient_antFamiliar.belongsToMany(Patient);
// Patient.hasMany(Patient_antFamiliar);

module.exports = PatientAntFamiliarPariente;
