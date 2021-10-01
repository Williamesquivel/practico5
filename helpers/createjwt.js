const jwt = require('jsonwebtoken');

const createjwt = (id) => {
    const payload = { id }
    return new Promise((resolve, reject) => {
        jwt.sign({ id }, process.env.KEYLOAD, (err, token) => {
            if (err) {
                reject('error en la creacion del token', err)
            }
            resolve(token)
        })
    })
}

module.exports = createjwt