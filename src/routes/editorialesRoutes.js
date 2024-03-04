const router= require('express').Router()

const editorialesCrontroller= require('../controller/editorialesController')

router.get('/', editorialesCrontroller.getAllEditoriales)
router.get('/:id', editorialesCrontroller.getOneEditorial)
router.post('/',editorialesCrontroller.createEditorial)

module.exports=router