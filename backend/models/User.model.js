const { DataTypes, Sequelize } = require("sequelize");
const db = require("../db");

const User = db.define("user", {
	name: { type: DataTypes.STRING, allowNull: false },
	CI: { type: DataTypes.STRING, allowNull: false, unique: true },
	birthdate: { type: DataTypes.DATE, allowNull: false },
	address: { type: DataTypes.STRING, allowNull: true },
	phone: { type: DataTypes.STRING, allowNull: true },

	email: { type: DataTypes.STRING, allowNull: false, unique: true },
	password: { type: DataTypes.STRING, allowNull: false },

	perfilImg: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, allowNull: false, defaultValue: "user" },
	status: { type: DataTypes.STRING, allowNull: false, defaultValue: "a" },
	permissions: { type: DataTypes.ARRAY(DataTypes.STRING) },
	logout_date: { type: DataTypes.DATE },
});

module.exports = User;
