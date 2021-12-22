const mongoose = require('mongoose')

const SiswaSchema = mongoose.Schema({
    nama:{
        type: String,
        required: true
    },
    tanggalLahir:{
        type: String,
        required: true
    },
    jenisKelamin:{
        type: String,
        required: true
    },
    hobi: String,
    create_date:{
        type: Date,
        default: Date.now
    }
})

const DataSiswa = module.exports= mongoose.model('biodata', SiswaSchema)
module.exports.get = function(callback, limit){
    DataSiswa.find(callback).limit(limit);
}