const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Armado3Schema = Schema({
    folio: String,
    fecha: Date,
    inspector: String,
    hora: String,
    modelo: String,
    pieza: String,
    ins1: String,
    def1: Array


});

module.exports = mongoose.model('armado3', Armado3Schema);