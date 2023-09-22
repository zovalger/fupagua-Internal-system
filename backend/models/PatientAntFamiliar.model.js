const { DataTypes } = require("sequelize");
const db = require("../db");
const Patient = require("./Patient.model");
const PatientAntFamiliarIncidencia = require("./PatientAntFamiliarIncidencia.model");
const PatientAntFamiliarPariente = require("./PatientAntFamiliarPariente.model");

const PatientAntFamiliar = db.define(
	"patient_antfamiliar",
	{
		// name: { type: DataTypes.STRING, allowNull: false },
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

PatientAntFamiliarIncidencia.hasMany(PatientAntFamiliar, {
	foreignKey: "patientAntFamiliarIncidenciaId",
	as: "incidencia",
});

PatientAntFamiliar.belongsTo(PatientAntFamiliarIncidencia, {
	foreignKey: "patientAntFamiliarIncidenciaId",
	as: "incidencia",
});
PatientAntFamiliarPariente.hasMany(PatientAntFamiliar, {
	foreignKey: "patientAntFamiliarParienteId",
	as: "pariente",
});
PatientAntFamiliar.belongsTo(PatientAntFamiliarPariente, {
	foreignKey: "patientAntFamiliarParienteId",
	as: "pariente",
});

PatientAntFamiliar.belongsTo(Patient, {
	foreignKey: "patientId",
	as: "antFamiliar",
});
Patient.hasMany(PatientAntFamiliar, {
	foreignKey: "patientId",
	as: "antFamiliar",
});



module.exports = PatientAntFamiliar;
