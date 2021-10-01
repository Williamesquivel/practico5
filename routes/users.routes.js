const express = require('express')
const router = express.Router();

const {
    rutaGet,
    rutaPost,
    rutaPut,
    rutaDelete,
    rutaGetOne
} = require('../controllers/users.controllers')

const {
    validarPostUser,
    validarPutUser,
    validarDeleteUser,
    validarCampos
} = require('../middlewares/validarCamposUsers')

const validarToken = require('../middlewares/validar_jwt')


router.get('/get-user/:id', rutaGetOne)
router.get('/get-user', rutaGet)
router.put('/edit-user/:id', [validarPutUser(), validarCampos, validarToken], rutaPut)
router.delete('/delete-user', [validarDeleteUser(), validarCampos, validarToken], rutaDelete)
router.post('/create-user', [validarPostUser(), validarCampos], rutaPost)

module.exports = router;