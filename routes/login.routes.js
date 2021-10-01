const router = require('express').Router()
const { controladorLogin } = require('../controllers/login.controllers')

router.post('/', controladorLogin)

module.exports = router