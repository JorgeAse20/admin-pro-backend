const path = require('path');
const fs = require('fs');
const { response } = require("express");
const { v4: uuidv4 } = require('uuid');
const { actualizarImagen } = require("../helpers/actualizar-imagen");

// https://www.npmjs.com/package/express-fileupload
// https://www.npmjs.com/package/uuid

const fileUpload = (req, res = response) => {

    // extraer el tipo y el id

    // si es medico,uasuario u hospital
    const tipo = req.params.tipo;
    // el id si es de un medico,usuario u hospital
    const id = req.params.id;

    // Validar tipo

    const tiposValidos = ['hospitales', 'usuarios', 'medicos'];
    if (!tiposValidos.includes(tipo)) {
        return res.status(400).json({
            ok: false,
            msg: 'no es medico, usuario u hospital'
        });
    }
    // Validar que exista un archivo

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'no hay ningun archivo'
        });
    }

    // Procesar la imagen

    // Primero extraerla
    const file = req.files.imagen;
    //console.log(file);

    // Generar o extraer la extencion del archivo
    const nombreCortado = file.name.split('.');
    const extensionArchivo = nombreCortado[nombreCortado.length - 1];

    // Validar extencion
    const extensinesValidas = ['png', 'jpg', 'jpeg', 'gif'];
    if (!extensinesValidas.includes(extensionArchivo)) {

        return res.status(400).json({
            ok: false,
            msg: 'no es una exencion permitida'
        });
    }

    // Generar el nombre de archivo

    const nombreArchivo = `${ uuidv4() }.${extensionArchivo}`;

    // Path donde vamos a guardar la imagen

    const path = `./uploads/${ tipo }/${ nombreArchivo }`;

    // Ahora mover la imagen
    // Use the mv() method to place the file somewhere on your server
    file.mv(path, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                ok: false,
                msg: 'Error al mover la imagen'

            });
        }

        // Actualizar base de datos

        actualizarImagen(tipo, id, nombreArchivo);



        res.json({
            ok: true,
            msg: 'Archivo subido',
            nombreArchivo
        });

    });




}

// controlador para mostrar la imagen

const retornaImagen = (req, res = response) => {

    const tipo = req.params.tipo;
    const foto = req.params.foto;

    // path de la imagen

    const pathImg = path.join(__dirname, `../uploads/${ tipo }/${ foto }`);

    // imagen por defecto

    if (fs.existsSync(pathImg)) {
        res.sendFile(pathImg);

    } else {
        const pathImg = path.join(__dirname, `../uploads/userd.png`);
        res.sendFile(pathImg);
    }



}


module.exports = {
    fileUpload,
    retornaImagen
}