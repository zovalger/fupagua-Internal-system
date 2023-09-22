const { DataTypes, Sequelize } = require("sequelize");
const db = require("../db");
const User = require("./User.model");

const UserLogs = db.define("user_logs", {
	type: { type: DataTypes.STRING },
	action: { type: DataTypes.STRING, allowNull: false },
	datos: { type: DataTypes.STRING(1500), allowNull: true },
});

UserLogs.belongsTo(User);
User.hasMany(UserLogs);

module.exports = UserLogs;
