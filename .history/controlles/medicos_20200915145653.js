// los controladores son funciones exportadas

// para el tipado
const { response } = require('express');

// Inportar modelo
const Medico = require('../models/medico');

const getMedicos = async(req, res = response) => {

    const medicos = await Medico.find()
        .populate('usuario', 'nombre  img')
        .populate('hospital', 'nombre  img')

    res.json({

        ok: true,
        medicos
        // msg: 'get medicos'
    });
}

const crearMedico = async(req, res = response) => {

    // extracccion del uid
    const uid = req.uid;
    // creaccion de la instancia
    // desostricturar lo que viene en la request
    const medico = new Medico({
        usuario: uid,
        ...req.body
    });


    try {

        const medicoDB = await medico.save();

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

const actualizarMedico = async(req, res = response) => {

    const id = req.params.id;
    const uid = req.uid;

    try {

        // obtener la referencia si existe ese uid
        const medico = await Medico.findById(id);

        if (!medico) {
            return res.status(404).json({

                ok: true,
                msg: 'Medico no encontrado',
                id
            });
        }

        //hospital.nombre = req.body.nombre;

        const cambiosMedico = {
                ...req.body,
                usuario: uid
            }
            // guardar en la bd
        const medicoActualizado = await Medico.findByIdAndUpdate(id, cambiosMedico, { new: true });



        res.json({

            ok: true,
            medico: medicoActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: "Hable con el administrador"
        });

    }

}
const borrarMedico = async(req, res = response) => {


    const id = req.params.id;

    try {

        // obtener la referencia si existe ese uid
        const medico = await Medico.findById(id);

        if (!medico) {
            return res.status(404).json({

                ok: true,
                msg: 'Medico no encontrado',
                id
            });
        }

        await Medico.findByIdAndDelete(id);


        res.json({

            ok: true,
            msg: "Medico borrado"
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: "Hable con el administrador"
        });

    }
}





module.exports = {
    getMedicos,
    crearMedico,
    actualizarMedico,
    borrarMedico
}