const escribeServie= require('../service/escribeService')


//This function connect with the service, and return in res a json
const createEscribe=async(req,res)=>{
    const createEscribe= await escribeServie.createEscribe(req.body)
    res.json(createEscribe)
}
//This function conncet with the service, and get all concurrences of Escribe
const getAllEscribe=async(req,res)=>{
    const getAllEscribe= await escribeServie.getAllEscribe()
    res.json(getAllEscribe)
}


module.exports= {createEscribe, getAllEscribe}