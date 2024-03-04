const express= require('express')
const sequelize = require('./db/db')
const app= express()

//Include Associations
require("./db/associations")

// For get data in the body
app.use(express.json())

const router= require('./routes/appRoutes')
app.use('/',router)

const PORT= process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("Escuchando en el puerto "+PORT+" ✅");
    
    sequelize
    .sync({force:false})
    .then(()=>console.log("Conexión con db completa "+sequelize.getDatabaseName()))
    .then(()=>console.log("Tablas sincronizadas"))
    .catch((err)=>console.log("Error al conectarse con la base de datos "+ err))
})