


const db = require("./database");
const User = require("./user");

const conect= async ()=>{
    try {
      await db.authenticate();
      console.log("conexion exitosa");

      await db.sync({force:true})
      console.log("tablas actualizadas");


      console.log("empezar a crear el usuario");
      const u = User.build({telefono:"0424"})
      console.log("usuario creado");

      console.log("consulta");

console.log(await User.findAll());
     
console.log("usuario guardado");

await u.save()

console.log("consulta");

console.log(JSON.stringify(await User.findAll()));

    } catch (error) {
      console.error("conexion fallida");
      console.log(error);
    }
  }



  conect()
