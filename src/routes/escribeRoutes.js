const router= require('express').Router()

const escribeController= require('../controller/escribeController')

router.get('/', escribeController.getAllEscribe)
router.post('/',escribeController.createEscribe)


module.exports=router