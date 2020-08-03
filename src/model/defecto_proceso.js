const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const defectos_procesoSchema = Schema({
    folio: Number,
    fecha: Date,
    departamento: String,
    operacion: String,
    producto: String,
    defecto: String,
    cantidad: Number,

});

module.exports = mongoose.model('Defectos_Procesos', defectos_procesoSchema);