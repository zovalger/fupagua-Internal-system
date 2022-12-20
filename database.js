const {Sequelize} = require("sequelize")


const db = new Sequelize("fupagua_internal_system","root","",{
    host:"localhost",
    dialect: "mysql"
})


module.exports =db