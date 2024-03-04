const libroService= require("../service/librosService")


const createLibro=async(req,res)=>{
    const createLibro= await libroService.createLibro(req.body)
    res.json(createLibro)
}
const getLibros=async(req,res)=>{
    const getLibros= await libroService.getLibros()
    res.json(getLibros)
}


module.exports={createLibro,getLibros}