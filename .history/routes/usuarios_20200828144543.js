/*
 Ruta: /api/usuarios
*/


// Importar Router para poder configurar las rutas
const { Router } = require('express');

// Importar 
const { getUsuarios, crearUsuario } = require('../controlles/usuarios');

// Crear una constate router porque es una funcion 
const router = Router();

// Mandar la referencia a la fncion

// get llamar a todos los usuarios

router.get('/', getUsuarios);

// Con el post vamos a crear un nuevo usuario

router.post('/', crearUsuario);



// Exportar el router
module.exports = router;