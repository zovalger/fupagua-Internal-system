const { DataTypes } = require("sequelize");
const db = require("../db");

const Activity = db.define(
	"activity",
	{
		title: { type: DataTypes.STRING, allowNull: false },
		description: DataTypes.STRING,
		dateStart: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
		dateEnd: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
		status: DataTypes.CHAR,
	},
	{
		setterMethods: {
			// name(value) {
			//   this.setDataValue("name", value.trim());
			// },
			// ci(value) {
			//   if (!value) return;
			//   this.setDataValue("ci", value.trim());
			// },
			// dateBirth(value) {
			//   if (!value) return;
			//   this.setDataValue("dateBirth", value.trim());
			// },
			// school(value) {
			//   if (!value) return;
			//   this.setDataValue("school", value.trim());
			// },
		},
	}
);

module.exports = Activity;
