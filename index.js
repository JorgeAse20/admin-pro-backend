// Busca las variables de entorno
require('dotenv').config();

// Importacion en node
const express = require('express');

const cors = require('cors');

// Importando un objeto de config.js
const { dbConnection } = require('./database/config');

// Crear el servidor de express,inicializa la aplicacion de espress
const app = express();

// Configurar CORS
app.use(cors());

// Base de datos , llamar la funcion 
dbConnection();
//console.log(process.env);
// usuario mean_user
// contraseña iykDG6EPqiA8GE3T

// Rutas
// Esto es lo que se va a ejecutar cuando alguin haga una solicitud
// Dos argumentos res, lo que se solisita y res lo que el servidor va a responder
app.get('/', (req, res) => {
    // se retornan objetos
    res.json({
        ok: true,
        //mensaje de respuesta
        msg: 'Hola Mundo'
    });

});

// Para levantarlo ,escojer el puerto,despues un callback que se ejecuta caundo este corriendo
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + 3000);
});