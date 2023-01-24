const sharp = require("sharp");

const bookResizeImg = async (filePath, size = 300) => {
	const path = `${filePath}-resize`;

	const info = await sharp(filePath).resize(size).toFile(path);

	if (info.width > info.height)
		await sharp(filePath).resize(size).rotate().toFile(path);

	console.log(info);

	return path;
};

module.exports = { bookResizeImg };
