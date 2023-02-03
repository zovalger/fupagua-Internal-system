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

const bookResizeImg = async (filePath, size = 300) => {
	const path = `${filePath}-resize`;

	const result = await Jimp.read(filePath)
		.then((image) => {
			let rotar = false;

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

	return path;
};

module.exports = { bookResizeImg };
