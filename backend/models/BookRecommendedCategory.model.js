const { DataTypes } = require("sequelize");
const db = require("../db");

const BookRecommendedCategory = db.define("bookrecommendedcategory", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: "General",
		unique: true,
	},

	status: { type: DataTypes.CHAR, defaultValue: "a" },
	syncCloud: {type:DataTypes.BOOLEAN, defaultValue:false}

});

module.exports = BookRecommendedCategory;
