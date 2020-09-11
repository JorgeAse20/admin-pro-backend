const { response } = require('express');
const Usuario = require('../models/usuario');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');

const getTodo = async(req, res = response) => {

    const busqueda = req.params.busqueda;
    const regex = new RegExp(busqueda, 'i');



    const usuarios = await Usuario.find({ nombre: regex });
    const medicos = await Medico.find({ nombre: regex });
    const hospitales = await Hospital.find({ nombre: regex });

    res.json({
        ok: true,
        usuarios,
        medicos,
        hospitales
    })

}



module.exports = {
    getTodo
}