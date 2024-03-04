const editorialService= require('../service/editorialesService')

// Create Editorial 
const createEditorial=async(req,res)=>{
    const createEditorial= await editorialService.createEditorial(req.body)
    res.json(createEditorial)
}

// Get all ocurriences of Editoriales
const getAllEditoriales=async(req,res)=>{
    const getAllEditoriales= await editorialService.getAllEditoriales()
    res.json(getAllEditoriales)
}
 //Get only one editorial
const getOneEditorial=async(req,res)=>{
    const getOneEditorial= await editorialService.getOneEditorial(req.params.id)
    res.json(getOneEditorial)
}

module.exports={createEditorial,getAllEditoriales,getOneEditorial}