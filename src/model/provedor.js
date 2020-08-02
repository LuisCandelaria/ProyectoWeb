const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const provedorSchema = Schema({

    name: String

});

module.exports = mongoose.model('provedor', provedorSchema);