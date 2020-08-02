const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    username: String,
    password: String,
    type: String
});

module.exports = mongoose.model('usuarios', userSchema);