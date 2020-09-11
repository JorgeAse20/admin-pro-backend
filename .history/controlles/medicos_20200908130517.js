// los controladores son funciones exportadas

// para el tipado
const { response } = require('express');

// Inportar modelo
const Medico = require('../models/medico');

const getMedicos = (req, res = response) => {

    res.json({

        ok: true,
        msg: 'get medicos'
    });
}

const crearMedico = (req, res = response) => {

    // extracccion del uid
    const uid = req.uid;
    // creaccion de la instancia
    // desostricturar lo que viene en la request
    const medico = new Medico({
        usuario: uid,
        ...req.body
    });


    try {

        const medicoDB = medico.save();

        res.json({

            ok: true,
            medico: medicoDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'hable con el administrador'
        })

    }


}

const actualizarMedico = (req, res = response) => {

    res.json({

        ok: true,
        msg: 'actualizar medico'
    });
}
const borrarMedico = (req, res = response) => {

    res.json({

        ok: true,
        msg: 'borrar medico'
    });
}





module.exports = {
    getMedicos,
    crearMedico,
    actualizarMedico,
    borrarMedico
}