const { DataTypes } = require("sequelize");
const db = require("../db");

const Book = db.define(
	"book",
	{
		title: { type: DataTypes.STRING, allowNull: false },
		subtitle: DataTypes.STRING,

		description: DataTypes.STRING(500),
		cota: DataTypes.STRING,
		autor: DataTypes.STRING,
		editionDate: DataTypes.INTEGER,

		city: DataTypes.STRING,
		editors: DataTypes.STRING,

		materia: DataTypes.STRING,

		height: DataTypes.INTEGER,
		// width: DataTypes.INTEGER,

		numberCopies: { type: DataTypes.INTEGER, defaultValue: 1 },
		numberCopiesAvailable: { type: DataTypes.INTEGER, defaultValue: 1 },
		
		
		numberPages: DataTypes.INTEGER,

		typeAdquisition: DataTypes.STRING,
		observations: DataTypes.STRING,

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
