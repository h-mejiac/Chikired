'use strict'

const Usuario = require("../models/usuario");

function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando, probando, 1, 2, 3...'
    });
}

function guardarUsuario(req, res) {
    var usuario = new Usuario();

    var params = req.body;

    usuario.empleado = params.empleado;
    usuario.nombre = params.nombre;
    usuario.correo = params.correo;
    usuario.ochomenos = params.ochomenos;
    usuario.nuevemas = params.nuevemas;
    usuario.hijos = params.hijos;

    if (usuario.nombre != null && usuario.empleado != null) {
        //guardar usuario
        usuario.save((err, usuarioStored) => {
            if (err) {
                res.status(200).send({ message: 'Error al guardar el usuario' });
            } else {
                if (!usuarioStored) {
                    res.status(404).send({ message: 'No se ha registrado el usuario' });
                } else {
                    res.status(200).send({ usuario: usuarioStored });
                }
            }
        });
    } else {
        res.status(200).send({ message: 'Nombre y número de empleado son obligatorios' });
    }
}

function actualizarUsuario(req, res) {
    var usuarioId = req.params.id;
    var update = req.body;

    Usuario.findByIdAndUpdate(usuarioId, update, (err, usuarioUpdated) => {
        if (err) {
            res.status(500).send({ message: 'Error en registro' });
        } else {
            if (!usuarioUpdated) {
                res.status(404).send({ message: 'Usuario no encontrado' });
            } else {
                res.status(200).send({ user: usuarioUpdated })
            }
        }
    });
}

module.exports = {
    pruebas,
    guardarUsuario,
    actualizarUsuario
};