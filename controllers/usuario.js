'use strict'

const { userInfo } = require('os');
var Usuario = require('../models/usuario');

function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando una acción del controlador de usuario'
    });
}

function guardarUsuario(req, res) {
    var usuario = new Usuario();

    var params = req.body;

    usuario.empleado = params.empleado;
    usuario.nombre = params.nombre;
    usuario.correo = params.correo;
    usuario.menorocho = params.menorocho;
    usuario.mayornueve = params.mayornueve;
    usuario.hijos = params.hijos;

    //Verificar que nombre y numero de empleado no esten vacios
    if (usuario.empleado != null && usuario.nombre != null) {
        //guardar usuario
        usuario.save((err, usuarioStore) => {
            if (err) {
                res.status(500).send({ message: 'Error al guardar el usuario' });
            } else {
                if (!usuarioStore) {
                    res.status(404).send({ message: 'No se ha registrado el usuario' });
                } else {
                    res.status(200).send({ usuario: usuarioStore });
                }
            }
        });
    } else {
        res.status(200).send({ message: 'Número de empleado y nombre es obligatorio' });
    }

}

module.exports = {
    pruebas,
    guardarUsuario
}