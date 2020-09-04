/*
 Ruta: /api/usuarios
*/


// Importar Router para poder configurar las rutas

const { Router } = require('express');

// Crear una constate router porque es una funcion 
const router = Router();

// Dos argumentos res, lo que se solisita y res lo que el servidor va a responder

router.get('/', (req, res) => {
    //se retornan objetos
    res.json({
        ok: true,
        //mensaje de respuesta
        usuarios: [{
            id: 123,
            nombre: 'Fernando'
        }]
    });

});


// Exportar el router
module.exports = router;