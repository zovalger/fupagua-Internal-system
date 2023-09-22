const { DataTypes } = require("sequelize");
const db = require("../db");
const { uploadImage } = require("../libs/cloudinary");
const { bookResizeImg } = require("../utils/helperImg");

const ImgFile = db.define(
	"imgfile",
	{
		img_local_url: { type: DataTypes.STRING, defaultValue: "" },
		img_local_url_original: { type: DataTypes.STRING, defaultValue: "" },
		img_public_id: { type: DataTypes.STRING, defaultValue: "" },
		img_cloudinary_url: { type: DataTypes.STRING, defaultValue: "" },
		width: { type: DataTypes.BIGINT, defaultValue: 512 },
		// a: activo t:papelera d:eliminado
		status: { type: DataTypes.CHAR, defaultValue: "a" },
	},
	{
		setterMethods: {},
	}
);

module.exports = ImgFile;
