const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const defectoOperacionesSchema = Schema({
    defecto: String,
    operacion: String
});

module.exports = mongoose.model('defectoOperaciones', defectoOperacionesSchema);