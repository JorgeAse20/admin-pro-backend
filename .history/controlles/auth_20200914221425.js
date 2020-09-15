// logica que debe de tener el login

const { response } = require('express');

// Viene del modelo de usuario
const Usuario = require('../models/usuario');

const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const { googleVerify } = require('../helpers/google-verify');

//funcion // async porque se necesita hacer peticiones
const login = async(req, res = response) => {

    // extraer del body
    const { email, password } = req.body;

    try {

        // Verificar email

        const usuarioDB = await Usuario.findOne({ email });

        // si el usuario no existe
        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: ' email no valido'
            });
        }

        // Verificar contraseña

        const validPassword = bcrypt.compareSync(password, usuarioDB.password);

        // Si no es valido

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'contraseña no valida'
            });
        }

        // Si llega a este punto generar un TOKEN -JWT
        const token = await generarJWT(usuarioDB.id);



        res.json({
            ok: true,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error conecte con el admin'

        })

    }

}

const googleSignIn = async(req, res = response) => {

    const googleToken = req.body.token;


    try {


        const { name, email, picture } = await googleVerify(googleToken);

        res.json({
            ok: true,
            msg: 'Google Signin',
            //googleToken
            name,
            email,
            picture
        });

    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Token no es correcto',

        });

    }


}

// Exportar como un objeto

module.exports = {
    login,
    googleSignIn
}