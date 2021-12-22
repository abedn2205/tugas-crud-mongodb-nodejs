const express = require('express')
const router = express.Router()
const SiswaController = require('./SiswaController')


router.get('/',(req, res)=>{
    res.json({
        nama: "Abednego",
        tgl_lhr: "22 Mei 1996",
        jenisKelamin: "Laki-laki",
        hobi : "SepakBola"
    })
})

router.route('/biodatas')
.get(SiswaController.index)
.post(SiswaController.new)

router.route('/biodatas/:biodata_id')
.patch(SiswaController.update)
.put(SiswaController.update)
.delete(SiswaController.delete)
.get(SiswaController.view)


module.exports = router;
