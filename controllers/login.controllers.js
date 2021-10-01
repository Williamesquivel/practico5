const users = require('../models/users.model')
const createjwt = require('../helpers/createjwt')
const bcrypt = require('bcrypt')

const controladorLogin = async(req, res) => {
    try {
        const { username, password } = req.body
        const user = await users.findOne({ username })
        if (!user) {
            res.json('usuario no encontrado')
        }
        const userExist = await bcrypt.compare(password, user.password)
        if (!userExist) {
            res.json('usuario no encontrado')
        }

        const token = await createjwt(user._id)

        res.json({ token })
    } catch (err) {
        console.error('hubo un problema al generar el token en el login controller ', err)

    }
}

module.exports = { controladorLogin }