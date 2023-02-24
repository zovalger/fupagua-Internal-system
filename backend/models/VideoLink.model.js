const { DataTypes } = require("sequelize");
const db = require("../db");
const VideoLinkCategory = require("./VideoLinkCategory.model");

const VideoLink = db.define(
	"videolink",
	{
		title: { type: DataTypes.STRING, allowNull: false },
		description: {type: DataTypes.STRING, defaultValue:""},
		url:{type: DataTypes.STRING,defaultValue:""},
		status: { type: DataTypes.CHAR, defaultValue: "a" },
		syncCloud: {type:DataTypes.BOOLEAN, defaultValue:false}
	}
);

VideoLink.belongsTo(VideoLinkCategory);
VideoLinkCategory.hasMany(VideoLink);

module.exports = VideoLink;
