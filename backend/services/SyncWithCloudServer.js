const axios = require("axios");
const { CLOUD_PAGE_URL, CLOUD_PAGE_SECRET_CODE_SYNC } = require("../config");
const VideoLink = require("../models/VideoLink.model");
const CategoryVideo = require("../models/VideoLinkCategory.model");

const syncVideolinks = async () => {
	const data = { CLOUD_PAGE_SECRET_CODE_SYNC };
	const url = `${CLOUD_PAGE_URL}/api/sync/videolink`;

	const videolinks = await VideoLink.findAll({
		where: { status: "a" },
		include: CategoryVideo,
	});

	data.videolinks = videolinks.map((v) => {
		const { id, url, title, description, createdAt, categoryvideo } = v;

		return {
			id,
			url,
			title,
			description,
			createdAt,
			category: categoryvideo.title,
		};
	});

	console.log(data);
	// todo: poner url de la pagina
	await axios.post(url, data);
};

module.exports = {
	syncVideolinks,
};
