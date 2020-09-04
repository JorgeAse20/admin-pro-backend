// Funciones que se van exportar

// Una funcion
const getUsuarios = (req, res) => {
    //se retornan objetos
    res.json({
        ok: true,
        // respuesta
        usuarios: []
    });
}

// exportar

module.exports = {
    getUsuarios
}