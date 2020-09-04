const jwt = require('jsonwebtoken');


// Generar token
const generarJWT = (uid) => {

    return new Promise((resolve, reject) => {

        const payload = {
            uid
        };
        // Duracion de la sesion 
        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '12h'

            // Sigue un callback el cual retorna
        }, (err, token) => {

            if (err) {
                console.log(err);
                reject('no se genero el jwt')
            } else {
                resolve(token);
            }

        });

    });
}
module.exports = {
    generarJWT,
}