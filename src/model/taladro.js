const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaladroSchema = Schema({
    folio: String,
    fecha: Date,
    inspector: String,
    hora: String,
    modelo: String,
    pieza: String,
    ins1: String,
    ins2: String,
    ins3: String,
    def1: Array,
    def2: Array,
    def3: Array


});

module.exports = mongoose.model('taladro', TaladroSchema);