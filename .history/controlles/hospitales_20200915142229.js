// los controladores son funciones exportadas

// para el tipado
const { response } = require('express');
const Hospital = require('../models/hospital');

const getHospitales = async(req, res = response) => {

    const hospitales = await Hospital.find()
        .populate('usuario', 'nombre  img')

    res.json({

        ok: true,
        hospitales
        // msg: 'get hospitales'
    });
}

const crearHospital = async(req, res = response) => {

    const uid = req.uid;
    const hospital = new Hospital({
        usuario: uid,
        ...req.body
    });

    try {

        const hospitalDB = await hospital.save();

        res.json({

            ok: true,
            hospital: hospitalDB
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'hable con el administrador'
        })
    }



}

const actualizarHospital = async(req, res = response) => {

    const id = req.params.id;
    const uid = req.uid;

    try {

        // obtener la referencia si existe ese uid
        const hospital = await Hospital.findById(id);

        if (!hospital) {
            return res.status(404).json({

                ok: true,
                msg: 'Hospital no encontrado',
                id
            });
        }

        //hospital.nombre = req.body.nombre;

        const cambiosHospital = {
                ...req.body,
                usuario: uid
            }
            // guardar en la bd
        const hospitalActualizado = await Hospital.findByIdAndUpdate(id, cambiosHospital, { new: true });



        res.json({

            ok: true,
            hospital: hospitalActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: "Hable con el administrador"
        });

    }


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