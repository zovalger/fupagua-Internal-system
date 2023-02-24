const { DataTypes } = require("sequelize");
const db = require("../db");
const ImgFile = require("./ImgFile.model");

const Book = db.define(
	"book",
	{
		title: { type: DataTypes.STRING, allowNull: false },
		subtitle: { type: DataTypes.STRING, defaultValue: "" },

		description: { type: DataTypes.STRING(500), defaultValue: "" },
		cota: { type: DataTypes.STRING, defaultValue: "" },
		autor: { type: DataTypes.STRING, defaultValue: "" },
		editionDate: { type: DataTypes.STRING, defaultValue: "" },

		city: { type: DataTypes.STRING, defaultValue: "" },
		editors: { type: DataTypes.STRING, defaultValue: "" },

		materia: { type: DataTypes.STRING, defaultValue: "" },

		height: { type: DataTypes.INTEGER, defaultValue: 0 },

		numberCopies: { type: DataTypes.INTEGER, defaultValue: 1 },
		numberCopiesAvailable: { type: DataTypes.INTEGER, defaultValue: 1 },

		numberPages: { type: DataTypes.INTEGER, defaultValue: 1 },
		duration: { type: DataTypes.STRING, defaultValue: "0:0:0" },

		typeAdquisition: { type: DataTypes.STRING, defaultValue: "" },
		observations: { type: DataTypes.STRING, defaultValue: "" },

		collection: { type: DataTypes.STRING, defaultValue: "" },

		// img_public_id: { type: DataTypes.STRING, defaultValue: "" },
		// img_cloudinary_url: { type: DataTypes.STRING, defaultValue: "" },
		// img_local_url: { type: DataTypes.STRING, defaultValue: "" },

		type: { type: DataTypes.STRING, allowNull: false, defaultValue: "book" },
	},
	{
		setterMethods: {
			materia(value) {
				this.setDataValue("materia", value.trim());
			},
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

// Book.belongsTo(ImgFile, {
// 	through: "book_portada",
// 	as: "bookportada",
// 	foreignKey: "portadaId",
// });

// ImgFile.hasOne(Book, {
// 	through: "book_portada",
// 	as: "bookportada",
// 	foreignKey: "imgfileId",
// });

Book.belongsTo(ImgFile, {
	as: "portada",
	foreignKey: {
		name: "portadaId",
		// allowNull: false,
		// unique: true,
	},
});

ImgFile.hasOne(Book, {
	as: "portada",

	foreignKey: {
		name: "portadaId",
		// allowNull: false,
		// unique: true,
	},
});

Book.belongsToMany(ImgFile, {
	through: "book_imgextra",
	as: "book_extra_img",
	foreignKey: "bookId",
});

ImgFile.belongsToMany(Book, {
	through: "book_imgextra",
	as: "book_extra_img",
	foreignKey: "imgfileId",
});

module.exports = Book;
