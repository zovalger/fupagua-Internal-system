const { DataTypes } = require("sequelize");
const db = require("../db");

const Patient = db.define(
	"patient",
	{
		name: { type: DataTypes.STRING, allowNull: false },
		dateBirth: { type: DataTypes.DATE, allowNull: false },
		ci: { type: DataTypes.STRING, defaultValue: "" },
		historyNumber: { type: DataTypes.STRING, unique: true, allowNull: false },
		age: { type: DataTypes.INTEGER, defaultValue: 0 },

		// male female
		sex: { type: DataTypes.STRING, defaultValue: "male" },
		// peso en kg
		weight: { type: DataTypes.FLOAT, defaultValue: 0 },

		height: { type: DataTypes.FLOAT, defaultValue: 0 },
		scholarship: { type: DataTypes.STRING, defaultValue: "" },

		// a: active d:trash
		status: { type: DataTypes.CHAR, defaultValue: "a" },

		procedenciaType: { type: DataTypes.STRING },
		procedencia: { type: DataTypes.STRING },
		procedenciaDiagnostico: { type: DataTypes.STRING },

		// fupagua
		diagnostico: { type: DataTypes.STRING },

		phoneNumberPatient: { type: DataTypes.STRING },
	},
	{
		getterMethods: {},
		setterMethods: {},
	}
);

module.exports = Patient;
