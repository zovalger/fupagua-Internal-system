const { uploadImage, deleteImage } = require("../libs/cloudinary");
const ImgFile = require("../models/ImgFile.model");
const { bookResizeImg } = require("../utils/helperImg");

const fs = require("fs-extra");

const ImageSyncCloud = async () => {
	const imgs = await ImgFile.findAll({ where: { img_public_id: "" } });

	console.log(imgs);
	if (imgs.length <= 0) return;

	imgs.map((img, index) =>
		setTimeout(async () => {
			try {
				const result = await uploadImage(img.img_local_url);

				console.log(result);
				const { public_id, secure_url } = result;
				img.img_cloudinary_url = secure_url;
				img.img_public_id = public_id;

				await img.save();
			} catch (error) {
				console.log("error al subir imagen");
				console.log(error);
			}
		}, 500 * (index + 1))
	);

	console.log("sync de imagenes iniciada");
	
};

const DeleteInstaceImgFile_Book = async (idImgFile) => {
	const imgFile = await ImgFile.findByPk(idImgFile);

	// * eliminar imagen de cloudinary
	try {
		await deleteImage(imgFile.img_public_id);
	} catch (error) {
		console.log("error al eliminar imagen en cloudinary");
		console.log(error);
	}

	// * eliminar imagen local
	try {
		if (imgFile.img_local_url) await fs.remove(imgFile.img_local_url);

		if (imgFile.img_local_url_original)
			await fs.remove(imgFile.img_local_url_original);
	} catch (error) {
		console.log("error al eliminar una imagen local");
		console.log(error);
	}

	// * eliminar registro de la base de datos
	try {
		await imgFile.destroy();
	} catch (error) {
		console.log(error);
	}
};

const ImgFileOptimiceAndFormate = async (file) => {
	const imgFormat = {};

	imgFormat.img_local_url_original = file.tempFilePath;

	// compirmir imagen

	try {
		imgFormat.img_local_url = await bookResizeImg(
			imgFormat.img_local_url_original,
			350
		);
	} catch (error) {
		console.log("error al comprimir la imagen");
		console.log(error);
	}

	// subir imagen

	// try {
	// 	if (!imgFormat.img_public_id) {
	// 		const result = await uploadImage(imgFormat.img_local_url);

	// 		// console.log(result);

	// 		const { public_id, secure_url } = result;

	// 		imgFormat.img_cloudinary_url = secure_url;
	// 		imgFormat.img_public_id = public_id;
	// 	}
	// } catch (error) {
	// 	console.log("error al subir imagen");
	// 	console.log(error);
	// }

	// devolver formato para imagefile

	return imgFormat;
};

module.exports = {
	ImageSyncCloud,
	DeleteInstaceImgFile_Book,
	ImgFileOptimiceAndFormate,
};
