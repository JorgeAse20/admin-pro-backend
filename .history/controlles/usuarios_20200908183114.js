// En este archivo se va a tener la logica que va haacer cada una de las rutas
// Funciones que se van exportar

// Importacion
const { response } = require('express');
//const { validationResult } = require('express-validator');

// Exportacion por defecto
const bcrypt = require('bcryptjs');

// Importar con mayuscula, va a ser un objeto
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');
//const { delete, delete, delete } = require('../routes/usuarios');

// Una funcion
const getUsuarios = async(req, res) => {

    //paginacion 
    const desde = Number(req.query.desde) || 0;
    console.log(desde);

    // obtener los usuarios
    //para especificar un dato en especifico ,const usuarios = await Usuario.find({}, 'nombre'); o const usuarios = await Usuario.find({}, 'nombre email rol');

    const usuarios = await Usuario.
    find({}, 'nombre email role google')
        //que se salte todos los registros desde el desde
        .skip(desde)
        .limit(5);


    //se retornan objetos
    res.json({
        ok: true,
        // respuesta
        usuarios,
        // uid: req.uid
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

        // Si llega a este punto generar un TOKEN -JWT
        const token = await generarJWT(usuario.id);

        // respuesta
        res.json({
            ok: true,
            usuario,
            token
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

    // validar token y comprobar si el usuario es correcto
    const uid = req.params.id;

    try {
        // verificar que un usuario existe
        const usuarioDB = await Usuario.findById(uid);

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario con ese id'
            });
        }

        // Actualizaciones
        // Extraer los datos
        const { password, google, email, ...campos } = req.body;

        if (usuarioDB.email !== email) {

            const existeEmail = await Usuario.findOne({ email });
            if (existeEmail) {
                return res.status(400).json({
                    ok: false,
                    msg: 'ya existe un usuario con ese email'
                });
            }
        }

        campos.email = email;

        // Actualizacion
        const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, { new: true });

        res.json({
            ok: true,
            usuario: usuarioActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });

    }

}

// Funcion para borrar usuario

const borrarUsuario = async(req, res = response) => {

    const uid = req.params.id;

    try {
        // verificar que el usuario existe
        const usuarioDB = await Usuario.findById(uid);

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario con ese id'
            });
        }

        await Usuario.findByIdAndDelete(uid);

        res.json({
            ok: true,
            msg: 'Usuario Eliminado'
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });

    }
}

// exportar para poderlos usar fuera de estos archivos

module.exports = {
    getUsuarios,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}