'use strict'

var express = require('express');
var UsuarioController = require('../controllers/usuario');

var api = express.Router();

api.get('/probando-controlador', UsuarioController.pruebas);

module.exports = api;