/*
ruta: api/todo/:busqueda
*/

const { Router } = require('express');
const { getTodo } = require('../controlles/busquedas');
const router = Router();


router.get('/:busqueda', getTodo)



module.exports = router;