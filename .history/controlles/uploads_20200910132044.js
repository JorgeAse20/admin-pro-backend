const { response } = require("express");



const fileUpload = (req, res = response) => {




    res.json({
        ok: true,
        msg: 'fileupload'
    })

}


module.exports = {
    fileUpload
}