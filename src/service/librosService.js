const Editoriales = require('../db/model/editoriales')
const Libros= require('../db/model/libros')
const { Op }= require('sequelize')
const createLibro=async(body)=>{
    try {
        const createLibro= await Libros.create(body)
        return createLibro
    } catch (error) {
        return error.errors[0].message
    }
}
const getLibros=async()=>{
    try {
        const getLibros= await Libros.findAll({
            include:{
                model:Editoriales,
                attributes:["nombre_edi"]
            },
            where:{
                unidades_lib:{
                    [Op.gt]:10
                }
                
            }
        })
        return getLibros
    } catch (error) {
        return 'Ha ocurrido un problema al obtener los libros'
    }
}
module.exports={createLibro,getLibros}