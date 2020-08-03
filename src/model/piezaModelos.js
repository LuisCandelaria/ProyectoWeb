const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const piezaModelosSchema = Schema({
    pieza: String,
    modelo: String
});

module.exports = mongoose.model('piezaModelos', piezaModelosSchema);