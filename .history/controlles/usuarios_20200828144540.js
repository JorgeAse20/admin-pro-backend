// En este archivo se va a tener la logica que va haacer cada una de las rutas
// Funciones que se van exportar

// Importar con mayuscula, va a ser un objeto
const Usuario = require('../models/usuario');

// Una funcion
const getUsuarios = (req, res) => {
    //se retornan objetos
    res.json({
        ok: true,
        // respuesta
        msg: 'get usuario'
    });
}

// Crear el controlador

const crearUsuario = async(req, res) => {

    // en el rq esta la peticion del usuario de ahi viene el body
    //console.log(req.body);
    // extraer
    const { email, password, nombre } = req.body;

    // crear una instancia
    const usuario = new Usuario(req.body);

    // Para grabar en la base de datos (es una promesa), para utilizar el await debemos estar dentro de una funcion async
    await usuario.save();

    // respuesta
    res.json({
        ok: true,
        usuario
    });
}

// exportar para poderlos usar fuera de estos archivos

module.exports = {
    getUsuarios,
    crearUsuario
}