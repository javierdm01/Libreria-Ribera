const router= require('express').Router()

const autoresController= require('../controller/autoresController')

router.get('/',autoresController.getAllActores)
router.post('/',autoresController.createAutores)

module.exports=router