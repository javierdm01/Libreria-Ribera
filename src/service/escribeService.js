const Autores = require('../db/model/autores')
const Editoriales = require('../db/model/editoriales')
const Escribe= require('../db/model/escribe')
const Libros = require('../db/model/libros')
const {Op} = require('sequelize')

/*
    This function create a object in table Escribe
*/
const createEscribe=async(body)=>{
    try {
        const createEscribe= await Escribe.create(body)
        return createEscribe
    } catch (error) {
        return error.errors[0].message        
    }
}
/*
* This function get All objects in table Escribe where cuantia > 120000
* and export some atributtes with the other tables
*/
const getAllEscribe=async()=>{
    const getAllEscribe=await Escribe.findAll({
        attributes:['cuantia'],
        include:[{
            model:Libros,
            attributes:["nombre_lib"],
            include:{
                model:Editoriales,
                attributes:["nombre_edi"]
            }
        },
        {
            model: Autores,
            attributes:["nombre_aut"]
        }],
        where:{
            cuantia:{
                [Op.gt]:120000
            }
        }
    })
    return getAllEscribe
}

module.exports= {getAllEscribe,createEscribe}