const { DataTypes } = require("sequelize");
const db = require("../db");

const CategoryVideo = db.define("categoryvideo", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: "general",
		unique: true,
	},

	status: { type: DataTypes.CHAR, defaultValue: "a" },
	syncCloud: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = CategoryVideo;
