const { DataTypes } = require("sequelize");
const db = require("../db");

const Book = db.define(
	"book",
	{
		title: { type: DataTypes.STRING, allowNull: false },
		subtitle: DataTypes.STRING,

		description: DataTypes.STRING(500),
		cota: { type: DataTypes.STRING, defaultValue: "" },
		autor: { type: DataTypes.STRING, defaultValue: "" },
		editionDate: { type: DataTypes.INTEGER, defaultValue: 1900 },

		city: { type: DataTypes.STRING, defaultValue: "" },
		editors: { type: DataTypes.STRING, defaultValue: "" },

		materia: { type: DataTypes.STRING, defaultValue: "" },

		height: { type: DataTypes.INTEGER, defaultValue: 0 },
		// width: DataTypes.INTEGER,

		numberCopies: { type: DataTypes.INTEGER, defaultValue: 1 },
		numberCopiesAvailable: { type: DataTypes.INTEGER, defaultValue: 1 },

		numberPages: { type: DataTypes.INTEGER, defaultValue: 1 },

		typeAdquisition: { type: DataTypes.STRING, defaultValue: "" },
		observations: { type: DataTypes.STRING, defaultValue: "" },

		collection: { type: DataTypes.STRING, defaultValue: "" },

		img_public_id: { type: DataTypes.STRING, defaultValue: "" },
		img_cloudinary_url: { type: DataTypes.STRING, defaultValue: "" },
		img_local_url: { type: DataTypes.STRING, defaultValue: "" },
		img_format: { type: DataTypes.STRING, defaultValue: "" },
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
