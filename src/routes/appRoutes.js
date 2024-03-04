const router= require('express').Router()

const autoresRoutes= require('./autoresRoutes')
const editorialesRoutes= require('./editorialesRoutes')
const escribeRoutes= require('./escribeRoutes')
const libroRoutes= require('./libroRoutes')

router.use('/libreria/autores', autoresRoutes)
router.use('/libreria/editoriales', editorialesRoutes)
router.use('/libreria/escribe', escribeRoutes)
router.use('/libreria/libro', libroRoutes)


module.exports= router