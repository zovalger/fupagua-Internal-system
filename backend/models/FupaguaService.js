const { DataTypes, STRING } = require("sequelize");
const db = require("../db");

const FupaguaService = db.define("fupaguaservice", {
	title: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.STRING, defaultValue: "" },
	status: { type: DataTypes.CHAR, defaultValue: "a" },
});

module.exports = FupaguaService;
