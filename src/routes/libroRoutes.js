const router= require('express').Router()

const librosController= require('../controller/librosController')

router.post('/',librosController.createLibro)
router.get('/',librosController.getLibros)


module.exports=router