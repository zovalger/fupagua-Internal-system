const { Sequelize } = require("sequelize");
const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } = require("./config");

const db = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
	host: "127.0.0.1",
	dialect: "mysql",
});

module.exports = db;
