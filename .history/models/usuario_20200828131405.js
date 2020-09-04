// Modelo de mongoose el encargado de como se va a ver en la BD

// Inportaciones
const { Schema, model } = require('mongoose');
// Crear esquema
// Definicion de cada uno de los registros que van a estar dentro de una coleccion
const UsuarioSchema = Schema({

    nombre: {
        // De que tipo
        type: String,
        // Para que sea obligatorio
        required: true
    },
    email: {
        type: String,
        recuired: true,
        // Para que sea unico
        unique: true

    },
    password: {
        type: String,
        recuired: true
    },
    img: {
        type: String,

    },
    role: {
        type: String,
        recuired: true,
        // Definir por defecto el rol
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default: false
    },
});

// Implementar el modelo
module.exports = model('Usuario', UsuarioSchema);