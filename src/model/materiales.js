const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialesSchema = Schema({
    nombre: String
});

module.exports = mongoose.model('materiales', materialesSchema);