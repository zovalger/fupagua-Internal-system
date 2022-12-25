const { DataTypes } = require("sequelize");
const db = require("./database");

const Employee = db.define("employee", {

	name: DataTypes.STRING,

	
	ci: { type: DataTypes.STRING, unique: true, allowNull: false },

	age: DataTypes.INTEGER,

	dateBirth: DataTypes.DATE,

	email: { type: DataTypes.STRING, unique: true },

	phoneNumber: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Employee;
