const validarJWT = (req, res, next) => {

    // Leer token

    const token = req.header('x-token');

    // Verificcar el token

    if (!token) {

        return res.status(401).json({

            ok: false,
            msg: 'no hay token en peticion'
        });
    }




    // Funciona si las cosas salen bien
    next();
}


module.exports = {

    validarJWT,
}