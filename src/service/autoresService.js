const Autores=require('../db/model/autores')

const createAutores=async(body)=>{
    try {
        const createAutores= await Autores.create(body)
        return createAutores
    } catch (error) {
        return error.errors[0].message
    }
}

const getAllActores=async()=>{
    const getAllActores= await Autores.findAll()
    return getAllActores
}



module.exports={createAutores,getAllActores}