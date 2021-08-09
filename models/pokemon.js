const mongoose = require('mongoose');
const pokemonSchema = new mongoose.Schema({
    numero: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true,
        default: "normal"
    }
})

module.exports = mongoose.model('pokemon', pokemonSchema);