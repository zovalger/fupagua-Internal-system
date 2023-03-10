const { config } = require("dotenv");

config();

const PORT = process.env.PORT || 3000;

const NODE_ENV = process.env.NODE_ENV;

const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

module.exports = {
	PORT,
	NODE_ENV,

	DATABASE_NAME,
	DATABASE_USER,
	DATABASE_PASSWORD,

	CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET,
};
