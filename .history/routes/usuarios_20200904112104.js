/*
 Ruta: /api/usuarios
*/


// Importar Router para poder configurar las rutas
const { Router } = require('express');
//importar
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validationResult } = require('express-validator');
// Importar funciones que vienen de controllers
const { getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario } = require('../controlles/usuarios');
const { validarJWT } = require('../middlewares/validar-jwt');




// Crear una constate router porque es una funcion 
const router = Router();

// Mandar la referencia a la fncion

// get llamar a todos los usuarios

router.get('/', validarJWT, getUsuarios);

// Con el post vamos a crear un nuevo usuario
// Para mandar varios midellweres se necesita poner en corchetes
router.post('/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos,
    ],
    crearUsuario
);

// Actualizar usuaro

router.put('/:id', [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('role', 'El role es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    actualizarUsuario
);

// Borrar usuario

router.delete('/:id',
    borrarUsuario
);
// Exportar el router
module.exports = router;