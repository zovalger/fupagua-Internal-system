const { DataTypes, STRING } = require("sequelize");
const db = require("../db");
const Book = require("./Book.model");

const BookFicha = db.define(
	"bookficha",
	{
		// autor cota title materia
		typeFicha: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "autor",
		},

		title: DataTypes.STRING,
		printed: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
	},
	{
		setterMethods: {
			title(value) {
				this.setDataValue("title", value.trim());
			},
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

Book.hasMany(BookFicha);
BookFicha.belongsTo(Book);

module.exports = BookFicha;
