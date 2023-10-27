const express = require('express')
const multer = require('multer')

const router = express()
const getData = multer()

const kelasController = require('../controller/kelasController')

router.get('/', kelasController.getAllKelas)
router.get('/:id', kelasController.selectKelas)

router.post('/create', getData.array(), kelasController.createKelas)
router.put('/update/:id', getData.array(), kelasController.updateKelas)

router.delete('/delete/:id', kelasController.deleteKelas)
module.exports = router 