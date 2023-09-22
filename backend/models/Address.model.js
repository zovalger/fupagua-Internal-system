const { DataTypes, Sequelize } = require("sequelize");
const db = require("../db");
const AddressCiudades = require("./AddressCiudades.model");
const AddressEstado = require("./AddressEstado.model");
const AddressMunicipios = require("./AddressMunicipios.model");
const AddressParroquias = require("./AddressParroquias.model");
const Patient = require("./Patient.model");

const Address = db.define("address", {
	dir: { type: DataTypes.STRING },
});

Address.belongsTo(AddressEstado, { foreignKey: "id_estado" });
Address.belongsTo(AddressMunicipios, { foreignKey: "id_municipio" });
Address.belongsTo(AddressParroquias, { foreignKey: "id_parroquia" });
Address.belongsTo(AddressCiudades, { foreignKey: "id_ciudad" });

AddressEstado.hasMany(Address, { foreignKey: "id_estado" });
AddressMunicipios.hasMany(Address, { foreignKey: "id_municipio" });
AddressParroquias.hasMany(Address, { foreignKey: "id_parroquia" });
AddressCiudades.hasMany(Address, { foreignKey: "id_ciudad" });

Address.belongsTo(Patient);
Patient.hasOne(Address);

module.exports = Address;
