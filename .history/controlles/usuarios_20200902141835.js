// En este archivo se va a tener la logica que va haacer cada una de las rutas
// Funciones que se van exportar

// Importacion
const { response } = require('express');
const { validationResult } = require('express-validator');

// Exportacion por defecto
const bcrypt = require('bcryptjs');

// Importar con mayuscula, va a ser un objeto
const Usuario = require('../models/usuario');

// Una funcion
const getUsuarios = async(req, res) => {

    // obtener los usuarios
    //para especificar un dato en especifico ,const usuarios = await Usuario.find({}, 'nombre'); o const usuarios = await Usuario.find({}, 'nombre email rol');

    const usuarios = await Usuario.find({}, 'nombre email role google');

    //se retornan objetos
    res.json({
        ok: true,
        // respuesta
        usuarios
    });
}

// Crear el controlador

const crearUsuario = async(req, res) => {

    // en el rq esta la peticion del usuario de ahi viene el body
    //console.log(req.body);
    // extraer
    const { email, password, nombre } = req.body;


    // Validar si el correo existe

    try {

        const existeEmail = await Usuario.findOne({ email });

        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo existe'
            });
        }

        // crear una instancia
        const usuario = new Usuario(req.body);

        // Encriptar contraseña
        // Data generada de manera aletoria (salt)
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        // Se graba el usuario
        // Para grabar en la base de datos (es una promesa), para utilizar el await debemos estar dentro de una funcion async
        await usuario.save();

        // respuesta
        res.json({
            ok: true,
            usuario
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }


}

const actualizarUsuario = async(req, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });

    }

}



// exportar para poderlos usar fuera de estos archivos

module.exports = {
    getUsuarios,
    crearUsuario,
    actualizarUsuario,
}