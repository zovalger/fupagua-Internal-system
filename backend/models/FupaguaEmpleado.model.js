const { DataTypes, STRING } = require("sequelize");
const db = require("../db");
const FupaguaService = require("./FupaguaService.model");
const ImgFile = require("./ImgFile.model");

const FupaguaEmpleado = db.define("fupaguaempleado", {
	name: { type: DataTypes.STRING, allowNull: false, default: "" },
	ci: { type: DataTypes.STRING, default: "" },
	FPV: { type: DataTypes.STRING, default: "" },
	email: { type: DataTypes.STRING, default: "" },
	description: { type: DataTypes.STRING, default: "" },
	status: { type: DataTypes.CHAR, defaultValue: "a" },
	syncCloud: {type:DataTypes.BOOLEAN, defaultValue:false}

});

FupaguaEmpleado.belongsTo(FupaguaService);
FupaguaService.hasMany(FupaguaEmpleado);

FupaguaEmpleado.belongsTo(ImgFile);
ImgFile.hasOne(FupaguaEmpleado);

module.exports = FupaguaEmpleado;
