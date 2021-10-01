const users = require('../models/users.model')
const bcrypt = require('bcrypt')
const ctrlusers = {}


//controlador de la ruta get para traer todos los usuarios
ctrlusers.rutaGet = async(req, res) => {
        const datosUsers = await users.find({ estado: true })
        res.json(datosUsers)
            //controlador de la ruta post 
    }
    //controlador de la ruta get pero trayendo un solo usuario para
ctrlusers.rutaGetOne = async(req, res) => {
    try {
        const datoUser = await users.findById(req.params.id)
        res.json(datoUser)
    } catch (err) {

    }

}

ctrlusers.rutaPost = async(req, res) => {
    try {
        const { username, email, password, role } = req.body
        const newPassword = await bcrypt.hash(password, 10)

        const newUsers = new users({ username, email, password: newPassword, role })
        await newUsers.save();
        res.status(201).json({ msg: 'usuario cargado' })
    } catch (err) {
        console.error('hubo un error en el controlador de generacion de usuario')
        res.status(402).json(err)
    }
}

//controlador de la ruta put
ctrlusers.rutaPut = async(req, res) => {
        console.log('aaa')
        try {
            const { username, email, password, role } = req.body;
            const newPassword = await bcrypt.hash(password, 10)

            await users.findByIdAndUpdate(req.params.id, { username, email, password: newPassword, role });
            res.json({ msg: 'datos del usuario cambiados' })

        } catch (err) {
            console.error('hubo un error en el controlador de generacion de usuario')
            res.status(403).json(err)
        }
    }
    //controlador para la ruta Delete pero sin borrar el registro, pues solo cambiamos el activo por false 
ctrlusers.rutaDelete = async(req, res) => {
    try {
        await users.findByIdAndUpdate(req.body.id, { estado: false })
        res.status(203).json('usuario desactivado correctamente')
    } catch (err) {
        console.error('hubo un error en el controlador de eliminacion de usuario', err)
        res.status(403).json(err)
    }

}

module.exports = ctrlusers;