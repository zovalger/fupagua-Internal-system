const { DataTypes } = require("sequelize");
const db = require("../db");
const VideoLinkCategory = require("./VideoLinkCategory.model");

const VideoLink = db.define(
	"videolink",
	{
		title: { type: DataTypes.STRING, allowNull: false },
		description: DataTypes.STRING,
		url: DataTypes.STRING,
		status: { type: DataTypes.CHAR, defaultValue: "a" },
	},
	
	{
		setterMethods: {
			// name(value) {
			//   this.setDataValue("name", value.trim());
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

VideoLink.belongsTo(VideoLinkCategory);
VideoLinkCategory.hasMany(VideoLink);

module.exports = VideoLink;
