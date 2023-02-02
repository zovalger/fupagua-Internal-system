const { uploadImage, deleteImage } = require("../libs/cloudinary");
const ImgFile = require("../models/ImgFile.model");
const { bookResizeImg } = require("../utils/helperImg");

const fs = require("fs-extra");

const ImageAndOptimizationSync = async () => {
	const imgs = await ImgFile.findAll({ where: { img_public_id: "" } });

	await imgs.map(async (img) => {
		try {
			if (!img.img_local_url)
				img.img_local_url = await bookResizeImg(
					img.img_local_url_original,
					350
				);

			try {
				if (!img.img_public_id) {
					const result = await uploadImage(img.img_local_url);

					// console.log(result);

					const { public_id, secure_url } = result;

					img.img_cloudinary_url = secure_url;
					img.img_public_id = public_id;
				}

				console.log(secure_url);
			} catch (error) {
				console.log("error al subir imagen");
				console.log(error);
			}

			await img.save();
		} catch (error) {
			console.log("error al optimizar la imagen");
			console.log(error);
		}
	});
};

const DeleteInstaceImgFile_Book = async (idImgFile) => {
	const imgFile = await ImgFile.findByPk(idImgFile);

// todo: eliminar registro de imagen en libro

	if (condition) {
		
	}
	imgFile.bookId

	try {
		




	} catch (error) {
		
	}

	await deleteImage(imgFile.public_id);

};

module.exports = { ImageAndOptimizationSync, DeleteInstaceImgFile: DeleteInstaceImgFile_Book };
