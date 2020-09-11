// verificar si existe lleer la carpeta y los archivos
const fs = require('fs');

const Usuario = require('../models/usuario');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');



const actualizarImagen = async(tipo, id, nombreArchivo) => {


    // evaluar el tipo
    switch (tipo) {

        case 'medicos':
            const medico = await Medico.findById(id);
            if (!medico) {
                console.log('no es un medico por id');
                return false;
            }
            const pathViejo = `./uploads/medicos/${ medico.img }`;
            if (fs.existsSync(pathViejo)) {
                // se borra la imagen anterior
                fs.unlinkSync(pathViejo);
            }
            medico.img = nombreArchivo;
            await medico.save();
            return true;

            break;
        case 'hospitales':

            break;
        case 'usuarios':

            break;

    }

}






module.exports = {
    actualizarImagen
}