const { DataTypes } = require("sequelize");
const db = require("../db");

const Book = db.define(
	"book",
	{
		title: { type: DataTypes.STRING, allowNull: false },
		description: DataTypes.STRING,

		autor: DataTypes.STRING,
		editionDate: DataTypes.DATE,

		city: DataTypes.STRING,
		editors: DataTypes.STRING,
		materia: DataTypes.STRING,

		cota: DataTypes.STRING,

		width: DataTypes.INTEGER,
		height: DataTypes.INTEGER,
		numberCopies: DataTypes.INTEGER,
		// numberCopiesAviables:DataTypes.INTEGER,
		numberPages: DataTypes.INTEGER,
		collection: DataTypes.STRING,
	},
	{
		setterMethods: {
			// name(value) {
			// 	this.setDataValue("name", value.trim());
			// },
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

module.exports = Book;
