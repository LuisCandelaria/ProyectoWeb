const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AcabadosSchema = Schema({
    folio: String,
    fecha: Date,
    inspector: String,
    hora: String,
    modelo: String,
    pieza: String,
    ins1: String,
    def1: Array

});

module.exports = mongoose.model('acabados', AcabadosSchema);