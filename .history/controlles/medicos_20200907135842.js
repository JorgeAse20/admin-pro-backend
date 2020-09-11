// los controladores son funciones exportadas

// para el tipado
const { response } = require('express');

const getMedicos = (req, res = response) => {

    res.json({

        ok: true,
        msg: 'get medicos'
    });
}

const crearMedico = (req, res = response) => {

    res.json({

        ok: true,
        msg: 'crear medico'
    });
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