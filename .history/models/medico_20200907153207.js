// Modelo de mongoose el encargado de como se va a ver en la BD


const { Schema, model } = require('mongoose');
const hospital = require('./hospital');

const MedicoSchema = Schema({

    nombre: {

        type: String,
        // Para que sea obligatorio
        required: true
    },
    img: {
        type: String,

    },
    // indicar una relacion con usuarios
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        recuired: true
    },

    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    }
    // para cambiar el nombre en la bd
});

// Configuracion global

MedicoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

// Implementar el modelo
module.exports = model('Medico', MedicoSchema);