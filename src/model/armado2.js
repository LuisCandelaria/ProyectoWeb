const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Armado2Schema = Schema({
    folio: String,
    fecha: Date,
    inspector: String,
    hora: String,
    modelo: String,
    pieza: String,
    ins1: String,
    def1: Array


});

module.exports = mongoose.model('armado2', Armado2Schema);