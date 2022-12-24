const { DataTypes } = require("sequelize");
const db = require("../db");

const Patient = db.define("patient", {
	name: DataTypes.STRING,

	ci: { type: DataTypes.STRING, unique: true, allowNull: false },

	age: DataTypes.INTEGER,
  
	dateBirth: DataTypes.DATE,

	school: DataTypes.STRING,
});

module.exports = Patient;
