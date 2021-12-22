DataSiswa = require('./SiswaModel')

exports.index = function(req, res){
    DataSiswa.get(function(err,biodatas){
        if(err){
            res.json({
                status: "error",
                message: err
            })
        }
        res.json({
            status: "Success",
            message: "Data Siswa retrived Success",
            data: biodatas
        })
    })
}

exports.new = function(req, res){
    let biodata = new DataSiswa()
    biodata.nama = req.body.nama ? req.body.nama : biodata.nama;
    biodata.tanggalLahir = req.body.tanggalLahir;
    biodata.jenisKelamin = req.body.jenisKelamin;
    biodata.hobi = req.body.hobi
    biodata.save().then((data)=>{
        res.json({
            status: "Success",
            message: "New Biodata Siswa Created",
            biodata: data
        })
    })
    .catch((err)=>{
        res.status(500).send({
            message: err.message || "Internal Server Error"
        })
    })
}

exports.view = function(req, res){
    DataSiswa.findById(req.params.biodata_id, function(err, biodata){
        if(err){
            res.json({
                status: "error",
                message: err
            })
        }
        res.json({
            message: "Contact Data Siswa Detail",
            data: biodata
        })
    })
}

exports.update = function(req, res){
    DataSiswa.findById(req.params.biodata_id, function (err, biodata){
        if(err){
            res.json({
                status: "error",
                message: "ID not found"
            })
        }
        biodata.nama = req.body.nama;
        biodata.tanggalLahir = req.body.tanggalLahir;
        biodata.jenisKelamin = req.body.jenisKelamin;
        biodata.hobi = req.body.hobi;
        biodata.save()
        .then((data)=>{
            res.json({
                status: "Success",
                message: "Biodata Siswa Update",
                DataSiswa : data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                message: err.message || "Internal Server Error"
            })
        })
    })
}

exports.delete= function(req, res){
    DataSiswa.remove({
        _id: req.params.biodata_id
    }, function(err, biodata){
        if(err)
        res.send(err)

        res.json({
            status: "Success",
            message: "Delete Data Siswa Success"
        })
    })
}