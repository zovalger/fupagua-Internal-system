const { DataTypes } = require("sequelize");
const db = require("../db");
const Book = require("./Book.model");
const BookRecommendedCategory = require("./BookRecommendedCategory.model");

const BookRecommended = db.define("bookrecommended", {
	status: { type: DataTypes.CHAR, defaultValue: "a" },
	syncCloud: { type: DataTypes.BOOLEAN, defaultValue: false },
});

BookRecommended.belongsTo(Book);
BookRecommended.belongsTo(BookRecommendedCategory);
BookRecommendedCategory.hasMany(BookRecommended);

module.exports = BookRecommended;
