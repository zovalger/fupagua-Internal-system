const fs = require("fs-extra");
const { Op } = require("sequelize");

const { uploadImage, deleteImage } = require("../libs/cloudinary");
const ImgFile = require("../models/ImgFile.model");
const { bookResizeImg } = require("../utils/helperImg");

const ImageSyncCloud = async () => {
	const imgs = await ImgFile.findAll({
		where: {
			img_public_id: "",
			status: "a",
			[Op.or]: [{ img_local_url: { [Op.ne]: "" } }],
		},
	});

	if (imgs.length <= 0) return;
	console.log("sync de imagenes iniciada");

	await Promise.all(
		imgs.map(async (img) => {
			try {
				const result = await uploadImage(img.img_local_url);

				console.log(result);
				const { public_id, secure_url } = result;

				await img.update({
					img_cloudinary_url: secure_url,
					img_public_id: public_id,
				});

				console.log(`imagen "${img.img_local_url}" subida a cloudinary`);
			} catch (error) {
				console.log("error al subir imagen");
				console.log(error);
			}
		})
	);

	console.log("sync de imagenes terminada ");
};

const ImageResizeAll = async () => {
	const imgs = await ImgFile.findAll({
		where: { img_local_url: "", status: "a" },
	});

	console.log(imgs);

	if (imgs.length <= 0) return;

	await Promise.all(
		imgs.map(
			async (img) =>
				await img.update({
					img_local_url: await bookResizeImg(img.img_local_url_original, 350),
				})
		)
	);
};

// marcar para eliminar despues
const markToDeleteImgFile = async (idImgFile) => {
	try {
		const imgFile = await ImgFile.findByPk(idImgFile);

		await imgFile.update({ status: "d" });
	} catch (error) {
		console.log(error);
	}
};

const deleteImgFileProcess = async (imgfile) => {
	const { img_public_id, img_local_url, img_local_url_original } = imgfile;
	try {
		// * eliminar imagen de cloudinary
		if (img_public_id) await deleteImage(img_public_id);

		// * eliminar imagen local
		if (img_local_url) await fs.remove(imgfile.img_local_url);

		if (img_local_url_original) await fs.remove(imgfile.img_local_url_original);

		// * eliminar registro de la base de datos
		await imgfile.destroy();
	} catch (error) {
		console.log("error al eliminar ImgFile");
		console.log(error);
	}
};

const deleteImgFile = async (id) => {
	const imgfile = await ImgFile.findByPk(id);

	await deleteImgFileProcess(imgfile);
};

const deleteAllImgFileInTrash = async () => {
	const imgs = await ImgFile.findAll({ where: { status: "b" } });
	await Promise.all(imgs.map(async (img) => await deleteImgFileProcess(img)));
};

module.exports = {
	ImageSyncCloud,
	markToDeleteImgFile,
	ImageResizeAll,
	deleteImgFile,
	deleteAllImgFileInTrash,
};
