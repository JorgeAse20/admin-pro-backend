const validarJWT = (req, res, next) => {

    // Leer token

    const token = req.header('x-token');

    console.log(token);




    // Funciona si las cosas salen bien
    next();
}


module.exports = {

    validarJWT,
}