const { DataTypes } = require("sequelize");
const db = require("../db");

const CategoryVideo = db.define(
	"categoryvideo",
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "general",
			unique: true,
		},


		status: { type: DataTypes.CHAR, defaultValue: "a" },
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

module.exports = CategoryVideo;
