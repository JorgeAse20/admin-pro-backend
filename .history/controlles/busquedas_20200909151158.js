// getTodo

const { response } = require('express');

const getTodo = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'getTodo'
    })

}



module.exports = {
    getTodo
}