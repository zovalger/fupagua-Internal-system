const { DataTypes, STRING } = require("sequelize");
const db = require("../db");
const ImgFile = require("./ImgFile.model");

const EventPost = db.define("eventpost", {
	title: { type: DataTypes.STRING(500), allowNull: false },
	description: { type: DataTypes.STRING(1000), defaultValue: "" },
	status: { type: DataTypes.CHAR, defaultValue: "a" },
	syncCloud: { type: DataTypes.BOOLEAN, defaultValue: false },
	toDate: { type: DataTypes.DATE, defaultValue: new Date(Date.now()) },
	link: { type: DataTypes.STRING, allowNull: true, defaultValue: "" },
});

EventPost.belongsTo(ImgFile);
ImgFile.hasOne(EventPost);

module.exports = EventPost;
