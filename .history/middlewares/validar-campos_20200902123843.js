const { response } = require('express');

const validarCampos = (req, res = response, next) => {

    // Revisa si hay errores en la request
    const errores = validationResult(req);
    // Si hay va a disparar todos los errores
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }
    // si pasa a este punto significa que no hay errores,se llama la funcion next
    next();
}

// Exportar para que sea valido en toda la aplicacion
// Lo vamos a utilizar en las rutas
module.exports = {
    validarCampos
}