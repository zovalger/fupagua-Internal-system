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
	},
	{
		setterMethods: {
			// async img_local_url(tempFilePath) {
			// 	this.setDataValue("img_local_url_original", tempFilePath);

			// 	// try {
			// 	// 	const img_optimized = await bookResizeImg(tempFilePath, 350);

			// 	// 	this.setDataValue("img_local_url", img_optimized);

			// 	// 	try {
			// 	// 		const { public_id, secure_url } = await uploadImage(img_optimized);

      //   //     console.log(secure_url);

			// 	// 		this.setDataValue("img_cloudinary_url", secure_url);
			// 	// 		this.setDataValue("img_public_id", public_id);
			// 	// 	} catch (error) {
			// 	// 		console.log("error al subir imagen");
			// 	// 		console.log(error);
			// 	// 	}
			// 	// } catch (error) {
			// 	// 	console.log("error al optimizar la imagen");
			// 	// 	console.log(error);
			// 	// }
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

module.exports = ImgFile;
