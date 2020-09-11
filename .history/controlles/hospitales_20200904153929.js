// los controladores son funciones exportadas

// para el tipado
const { response } = require('express');

const getHospitales = (req, res = response) => {

    res.json({

        ok: true,
        msg: 'get hospitales'
    });
}

const crearHospital = (req, res = response) => {

    res.json({

        ok: true,
        msg: 'crear hospital'
    });
}

const actualizarHospital = (req, res = response) => {

    res.json({

        ok: true,
        msg: 'actualizar hospital'
    });
}
const borrarHospital = (req, res = response) => {

    res.json({

        ok: true,
        msg: 'borrar hospital'
    });
}





module.exports = {
    getHospitales,
    crearHospital,
    actualizarHospital,
    borrarHospital
}