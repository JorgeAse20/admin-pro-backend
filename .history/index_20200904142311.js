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

// lectura del body parseo , colocar antes de las rutas
app.use(express.json());

// Base de datos , llamar la funcion 
dbConnection();

//console.log(process.env);
// usuario mean_user
// contraseña iykDG6EPqiA8GE3T

// Rutas
// Esto es lo que se va a ejecutar cuando alguin haga una solicitud

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/hospitales', require('./routes/hospitales'));
app.use('/api/login', require('./routes/auth'));


// Para levantarlo ,escojer el puerto,despues un callback que se ejecuta caundo este corriendo
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + 3000);
});