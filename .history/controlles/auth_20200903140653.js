const { response } = require('express');

//funcion // async porque se necesita hacer peticiones
const login = async(req, res = response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error conecte con el admin'

        })

    }

}


// Exportar como un objeto

module.exports = {
    login
}