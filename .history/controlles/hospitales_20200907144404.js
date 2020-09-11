// los controladores son funciones exportadas

// para el tipado
const { response } = require('express');
const Hospital = require('../models/hospital');

const getHospitales = (req, res = response) => {

    res.json({

        ok: true,
        msg: 'get hospitales'
    });
}

const crearHospital = async(req, res = response) => {

    await hospital.save();

    const hospital = new Hospital(req.body);

    try {

        res.json({

            ok: true,
            msg: 'crear hospital'
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'hable con el administrador'
        })
    }



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