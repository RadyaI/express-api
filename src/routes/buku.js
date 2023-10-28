const express = require('express')
const multer = require('multer')

const router = express()
const getData = multer()

const bukuController = require('../controller/bukuController')
const upload = require('../middleware/multer')

router.post('/create', getData.array(), upload.single('foto_buku'), bukuController.createBuku)

module.exports = router