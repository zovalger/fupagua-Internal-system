const { DataTypes, STRING } = require("sequelize");
const db = require("../db");
const ImgFile = require("./ImgFile.model");

const FupaguaService = db.define("fupaguaservice", {
	title: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.STRING, defaultValue: "" },
	status: { type: DataTypes.CHAR, defaultValue: "a" },
	syncCloud: { type: DataTypes.BOOLEAN, defaultValue: false },
});

FupaguaService.belongsTo(ImgFile);
ImgFile.hasOne(FupaguaService);

module.exports = FupaguaService;
