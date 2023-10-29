const express = require('express')
// const multer = require('multer')
const DB = require('../config/database')

const router = express()
// const getData = multer()

const bukuController = require('../controller/bukuController')
const upload = require('../middleware/multer')

router.get('/', bukuController.getAllBuku)
router.get('/:id', bukuController.selectBuku)

router.post('/create', upload.single('foto_buku'), (req, res) => {
    try {
        const date = new Date().getTime().toString()
        const fileName = date.slice(0, -2)
        const query = `insert into buku (nama_buku, foto_buku) values ('${req.body.nama_buku}','${fileName}')`
        DB.execute(query)
        res.send({
            Status: 'Success create buku'
        }, 201)
    } catch (error) {
        res.send({ error: error }, 500)
    }
})
router.put('/update/:id', upload.single('foto_buku'), (req, res) => {
    try {
        const date = new Date().getTime().toString()
        const fileName = date.slice(0, -2)
        const query = `update buku set nama_buku = '${req.body.nama_buku}', foto_buku = '${fileName}.png' where id_buku = ${req.params.id}`
        DB.execute(query)
        res.send({
            Status: "Success",

        }, 200)
    } catch (error) {
        res.send({ error: error })
    }
})

router.delete('/delete/:id', bukuController.deleteBuku)


module.exports = router