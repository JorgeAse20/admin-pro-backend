// Importacion del paquete
const mongoose = require('mongoose');

// Funcion para llamrla y establecer la conexion 
// Ayuda a trabajar con promesas async,convierte todo y retorna una promesa
const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}

// Exportar la funcion 
module.exports = {
    dbConnection
}