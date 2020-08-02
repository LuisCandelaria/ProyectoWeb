const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialesSchema = Schema({
    name: String
});

module.exports = mongoose.model('materiales', materialesSchema);