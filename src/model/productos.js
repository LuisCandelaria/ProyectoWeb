const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productosSchema = Schema({

    nombre: String,
    numero: Number

});

module.exports = mongoose.model('productos', productosSchema);