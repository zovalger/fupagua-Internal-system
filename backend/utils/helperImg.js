// ! por motivos de compatibilidad con la version de node 1.13
// ! no se puede usar la libreria "sharp"
// const sharp = require("sharp");
// const bookResizeImg = async (filePath, size = 300) => {
// 	const path = `${filePath}-resize`;

// 	const info = await sharp(filePath).resize(size).toFile(path);

// 	if (info.width > info.height)
// 		await sharp(filePath).resize(size).rotate().toFile(path);

// 	console.log(info);

// 	return path;
// };

const Jimp = require("jimp");
const { uploadImage } = require("../libs/cloudinary");

const bookResizeImg = async (filePath, size = 300) => {
	const path = `${filePath}-resize`;

	const result = await Jimp.read(filePath)
		.then((image) => {
			let rotar = false;

			// console.log(image);
			// vemos si tiene metadatos
			if (image._exif) {
				const { bitmap } = image;
				const { imageSize } = image._exif;

				console.log(
					`bitmapSizeImage: x: ${bitmap.width}, y: ${bitmap.height}`,
					`tagSizeImage: x: ${imageSize.width}, y: ${imageSize.height}`
				);

				rotar = imageSize.width !== bitmap.width;
			}

			const resizeImage = rotar
				? image.resize(size, Jimp.AUTO).rotate(90).write(path)
				: image.resize(size, Jimp.AUTO).write(path);

			return resizeImage;
		})
		.catch((err) => {
			console.error(err);
		});

	// console.log(result);

	return path;
};

const ImgFileFormate = async (file) => {
	const imgFormat = {};

	imgFormat.img_local_url_original = file.tempFilePath;

	// compirmir imagen

	try {
		imgFormat.img_local_url = await bookResizeImg(imgFormat.img_local_url_original, 350);
	} catch (error) {
		console.log("error al comprimir la imagen");
		console.log(error);
	}

	// subir imagen

	try {
		if (!imgFormat.img_public_id) {
			const result = await uploadImage(imgFormat.img_local_url);

			// console.log(result);

			const { public_id, secure_url } = result;

			imgFormat.img_cloudinary_url = secure_url;
			imgFormat.img_public_id = public_id;
		}
	} catch (error) {
		console.log("error al subir imagen");
		console.log(error);
	}

	// devolver formato para imagefile

	return imgFormat
};

module.exports = { bookResizeImg, ImgFileFormate };
