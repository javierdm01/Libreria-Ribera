const autoresService= require('../service/autoresService')


const getAllActores=async(req,res)=>{
    const getAllActores= await autoresService.getAllActores()
    res.json(getAllActores)
}

const createAutores=async(req,res)=>{
    const createAutores=  await autoresService.createAutores(req.body)
    res.json(createAutores)
}


module.exports= {createAutores,getAllActores}