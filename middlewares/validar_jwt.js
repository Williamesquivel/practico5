const jwt = require('jsonwebtoken');
const users = require('../models/users.model');
require('dotenv').config();

const validarToken = async (req, res, next) => {
    const token = req.headers.token
    if (!token) {
        return res.status(403).json('token invalido')
    }
    try {
        const algo = await jwt.verify(token, process.env.KEYLOAD)
        const{ id }= algo
        const dateUser = await users.findOne({ _id: id, estado: true })
        if (!dateUser) {
            return res.status(400).json('token invalido')
        }
        req.userRole = dateUser.role
        next();

    } catch (err) {
        return res.status(400).json('token invalido' + err)
    }
}

module.exports = validarToken