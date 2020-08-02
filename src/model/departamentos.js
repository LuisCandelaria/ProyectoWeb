const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departamentosSchema = Schema({

    nombre: String

});

module.exports = mongoose.model('departamentos', departamentosSchema);