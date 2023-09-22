const { v2: cloudinary } = require("cloudinary");
const {
	CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET,
} = require("../config");

cloudinary.config({
	cloud_name: CLOUDINARY_CLOUD_NAME,
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET,
});

const uploadImage = async (filePath, folder = "fupagua") =>
	await cloudinary.uploader.upload(filePath, { folder });

const deleteImage = async (id) => await cloudinary.uploader.destroy(id);

module.exports = { uploadImage, deleteImage };
