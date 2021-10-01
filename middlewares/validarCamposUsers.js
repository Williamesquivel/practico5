const { check, validationResult } = require('express-validator')
const middCUs = {}

const validarPostUser = () => {
    return [
        check('email', 'email invalido')
        .isEmail()
        .normalizeEmail()
        .trim()
        .escape(),
        check('password', 'password invalida')
        .trim()
        .escape()
        .isLength({ min: 8 }),
        check('username', 'username invalido')
        .isLength({ min: 6 }),
        check('role', 'rol invalido')
    ]
}

const validarPutUser = () => {
    return [
        check('email', 'email invalido')
        .isEmail()
        .normalizeEmail()
        .trim()
        .escape(),
        check('password', 'password invalida')
        .trim()
        .escape()
        .isLength({ min: 8 }),
        check('username', 'username invalido')
        .isLength({ min: 6 }),
        check('role', 'rol invalido')

    ]
}
const validarDeleteUser = () => {
    return [
        check('id', 'id invalida')
        .isMongoId()
        .trim()
        .escape()
    ]
}


const validarCampos = async(req, res, next) => {
    const error = validationResult(req, res, next)
    if (!error.isEmpty()) {
        res.status(400).json('parametros invalidos ' + error)
    }
}
module.exports = {
    validarPostUser,
    validarPutUser,
    validarDeleteUser,
    validarCampos
}