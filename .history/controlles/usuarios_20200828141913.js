// En este archivo se va a tener la logica que va haacer cada una de las rutas
// Funciones que se van exportar

// Una funcion
const getUsuarios = (req, res) => {
    //se retornan objetos
    res.json({
        ok: true,
        // respuesta
        msg: 'get usuario'
    });
}

// Crear el controlador

const crearUsuario = (req, res) => {
    //se retornan objetos
    res.json({
        ok: true,
        // respuesta
        msg: 'creando usuario'
    });
}

// exportar para poderlos usar fuera de estos archivos

module.exports = {
    getUsuarios,
    crearUsuario
}