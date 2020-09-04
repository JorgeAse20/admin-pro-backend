/*
 Ruta: /api/usuarios
*/


// Importar Router para poder configurar las rutas
const { Router } = require('express');
//importar
const { check } = require('express-validator');
// Importar 
const { getUsuarios, crearUsuario } = require('../controlles/usuarios');



// Crear una constate router porque es una funcion 
const router = Router();

// Mandar la referencia a la fncion

// get llamar a todos los usuarios

router.get('/', getUsuarios);

// Con el post vamos a crear un nuevo usuario
// Para mandar varios midellweres se necesita poner en corchetes
router.post('/', [
        check('nombre').not().isEmpty(),
        check('password').not().isEmpty(),
        check('email').isEmail(),
    ],
    crearUsuario
);

// Exportar el router
module.exports = router;