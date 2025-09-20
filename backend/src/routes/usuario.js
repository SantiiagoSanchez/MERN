const {Router} = require('express')
const router = Router()

//Router es una función de express que te permite crear un nuevo manejador de rutas. Se utiliza para organizar mejor las rutas de tu aplicación, en vez de definir todo en un solo archivo, puedes tener diferentes archivos por módulo

router.route('/')

    .get()
    .post()

router.route('/:id')

    .get()
    .delete()
    .put()

module.exports = router //Podemos utilizar este archivo en otra parte del proyecto, por eso lo exportamos