const sequelize=require("./db")

const Escribe=require('./model/escribe')
const Autores=require('./model/autores')
const Editoriales=require('./model/editoriales')
const Libros=require('./model/libros')

//Relacion 1 : N
Editoriales.hasMany(Libros)
Libros.belongsTo(Editoriales)

//Relacion N : M
Libros.belongsToMany(Autores,{through: Escribe})
Autores.belongsToMany(Libros,{through: Escribe})

Libros.hasMany(Escribe)
Escribe.belongsTo(Libros)

Autores.hasMany(Escribe)
Escribe.belongsTo(Autores)
