const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inspeccionProcesoSchema = Schema({
    folio: String,
    fecha: Date,
    inspector: String,
    hora: String

});

module.exports = mongoose.model('InspeccionProceso', inspeccionProcesoSchema);