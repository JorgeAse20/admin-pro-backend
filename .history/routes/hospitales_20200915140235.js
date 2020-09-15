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
    getHospitales,
    crearHospital,
    actualizarHospital,
    borrarHospital
} = require('../controlles/hospitales');

// Crear una constate router porque es una funcion 
const router = Router();

// Mandar la referencia a la fncion

// get llamar a todos los usuarios

router.get('/', getHospitales);

// Con el post vamos a crear un nuevo usuario
// Para mandar varios midellweres se necesita poner en corchetes
router.post('/', [
        validarJWT,
        //se valida que tiene inforacion
        check('nombre', 'El nombre del hospital es necesario').not().isEmpty(),
        validarCampos
    ],
    crearHospital
);

// Actualizar usuaro

router.put('/:id', [
        validarJWT,
        check('nombre', 'El nombre del hospital es necesario').not().isEmpty(),
        validarCampos

    ],
    actualizarHospital
);

// Borrar usuario

router.delete('/:id',
    borrarHospital
);
// Exportar el router
module.exports = router;