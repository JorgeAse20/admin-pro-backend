const jwt = require("jsonwebtoken");

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

    try {

        const { uid } = jwt.verify(token, process.env.JWT_SECRET);

        console.log(uid);

    } catch (error) {
        return res.status(401).json({

            ok: false,
            msg: 'token invalido'
        });

    }



    // Funciona si las cosas salen bien
    next();
}


module.exports = {

    validarJWT,
}