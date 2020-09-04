/*
 Ruta: /api/usuarios
*/


// Importar Router para poder configurar las rutas
const { Router } = require('express');

// Importar 
const { getUsuarios } = require('../controlles/usuarios');

// Crear una constate router porque es una funcion 
const router = Router();

// Mandar la referencia a la fncion

router.get('/', getUsuarios);




// Exportar el router
module.exports = router;