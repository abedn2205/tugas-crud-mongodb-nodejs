const express = require('express')
const app = express()
const port = 3000
const apiRouter = require('./api-routers')
const bodyParser = require('express')
const mongoose = require('mongoose')

app.get('/', (req, res)=>{
    res.send('Hello World app')
})

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.use('/DataSiswa', apiRouter)

mongoose.connect("mongodb://localhost/resthub")
const db = mongoose.connection

app.listen(port,()=>{
    console.log(`Port Sedang Berjalan di ${port}`)
})