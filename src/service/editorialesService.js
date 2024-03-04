const Editorial= require('../db/model/editoriales')

const createEditorial=async(body)=>{
    try {
        const createEditorial=await Editorial.create(body)
        return createEditorial
    } catch (error) {
        return error.errors[0].message
    }
}
const getAllEditoriales=async()=>{
    const getAllEditoriales= await Editorial.findAll({
        attributes:["nombre_edi","direccion_edi"]
    })
    return getAllEditoriales
}
const getOneEditorial=async(param)=>{
    const getOneEditorial= await Editorial.findByPk(param)
    return getOneEditorial
}

module.exports= {createEditorial,getAllEditoriales,getOneEditorial}
