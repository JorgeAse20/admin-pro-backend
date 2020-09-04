/*
Path: '/api/login'
*/


const { Router } = require('express');
const { login } = require('../controlles/auth');
const router = Router();

router.post('/', [

    ],

    login

)







module.exports = router;