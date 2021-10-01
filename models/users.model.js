const { model, Schema } = require('mongoose')

const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('users', usersSchema)