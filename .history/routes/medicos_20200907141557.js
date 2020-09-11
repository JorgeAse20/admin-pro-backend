/*
'/api/hospitales'
*/

// Importar Router para poder configurar las rutas
const { Router } = require('express');
//importar
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validationResult } = require('express-validator');
// Importar funciones que vienen de controllers
const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getMedicos,
    crearMedico,
    actualizarMedico,
    borrarMedico
} = require('../controlles/medicos');

// Crear una constate router porque es una funcion 
const router = Router();

// Mandar la referencia a la fncion

// get llamar a todos los usuarios

router.get('/', getMedicos);

// Con el post vamos a crear un nuevo usuario
// Para mandar varios midellweres se necesita poner en corchetes
router.post('/', [

    ],
    crearMedico
);

// Actualizar usuaro

router.put('/:id', [

    ],
    actualizarMedico
);

// Borrar usuario

router.delete('/:id',
    borrarMedico
);
// Exportar el router
module.exports = router;