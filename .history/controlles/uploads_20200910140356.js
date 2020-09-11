const { response } = require("express");

// https://www.npmjs.com/package/express-fileupload

const fileUpload = (req, res = response) => {

    // extraer el tipo y el id
    const tipo = req.params.tipo;
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
    console.log(file);



    res.json({
        ok: true,
        msg: 'fileupload'
    })

}


module.exports = {
    fileUpload
}