/*
Path: '/api/login'
*/


const { Router } = require('express');
const { login } = require('../controlles/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.post('/', [
        //    check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').isEmail(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos
    ],

    login

)







module.exports = router;