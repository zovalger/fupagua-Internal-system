const { Sequelize } = require("sequelize");
const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST } = require("./config");

const db = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
	host: DATABASE_HOST,
	dialect: "mysql",
	logging: false,
});

module.exports = db;
