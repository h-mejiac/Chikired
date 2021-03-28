'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    empleado: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
    },
    correo: String,
    ochomenos: Boolean,
    nuevemas: Boolean,
    hijos: Number
});

module.exports = mongoose.model('Usuario', UsuarioSchema);