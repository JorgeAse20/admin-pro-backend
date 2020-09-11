// Modelo de mongoose el encargado de como se va a ver en la BD

// Inportaciones
const { Schema, model } = require('mongoose');
// Crear esquema
// Definicion de cada uno de los registros que van a estar dentro de una coleccion
const HospitalSchema = Schema({

    nombre: {
        // De que tipo
        type: String,
        // Para que sea obligatorio
        required: true
    },
    img: {
        type: String,

    },
    // indicar una relacion con usuarios
    usuario: {
        // para que todos los hopitales se cren con un usuario
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
    // para cambiar el nombre en la bd
}, { collection: 'hospitales' });

// Configuracion global

HospitalSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

// Implementar el modelo
module.exports = model('Hospital', HospitalSchema);