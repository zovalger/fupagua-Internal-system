const { DataTypes } = require("sequelize");
const db = require("../db");

const Patient = db.define(
	"patient",
	{
		name: { type: DataTypes.STRING, allowNull: false },

		ci: { type: DataTypes.STRING, unique: true },

		age: DataTypes.INTEGER,

		dateBirth: DataTypes.DATE,

		school: DataTypes.STRING,
	},
	{
		setterMethods: {
			name(value) {
				this.setDataValue("name", value.trim());
			},
			ci(value) {
				if (!value) return;
				this.setDataValue("ci", value.trim());
			},
			dateBirth(value) {
				if (!value) return;
				this.setDataValue("dateBirth", value.trim());
			},
			school(value) {
				if (!value) return;
				this.setDataValue("school", value.trim());
			},
		},
	}
);

module.exports = Patient;
