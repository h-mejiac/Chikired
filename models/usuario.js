'use strict'

var mongoClient = require("mongodb").MongoClient;
var Schema = mongoClient.Schema;

var UsuarioSchema = Schema({
    empleado: String,
    nombre: String,
    correo: String,
    menorocho: Boolean,
    mayornueve: Boolean,
    hijos: Number
});

module.exports = mongoClient.model('Usuario', UsuarioSchema);