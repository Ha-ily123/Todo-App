const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
})

module.exports = mongoose.model('User', signupSchema)