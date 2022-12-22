const { config } = require("dotenv");

config();

const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

const NODE_ENV = process.env.NODE_ENV;

const PORT = process.env.PORT || 3000;

module.exports = {
	DATABASE_NAME,
	DATABASE_USER,
	DATABASE_PASSWORD,
	PORT,
	NODE_ENV,
};
