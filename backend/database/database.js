const {
	DATABASE_NAME,
	DATABASE_USER,
	DATABASE_PASSWORD,
	DATABASE_HOST,
} = require("../config");

module.exports = {
	username: DATABASE_USER,
	password: DATABASE_PASSWORD,
	database: DATABASE_NAME,
	host: DATABASE_HOST,
	dialect: "mysql",

	seederStorage: "sequelize",
	seederStorageTableName: "seeds",

	migrationStorage: "sequelize",
	migrationStorageTableName: "migrations",
};
