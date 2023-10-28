const express = require('express')
const multer = require('multer')
const guruController = require('../controller/guruController')

const router = express()
const getData = multer()

router.get('/', guruController.getAllGuru)
router.get('/:id', guruController.selectGuru)

router.post('/create', getData.array(), guruController.createGuru)
router.put('/update/:id', getData.array(), guruController.updateGuru)

router.delete('/delete/:id', guruController.deleteGuru)

module.exports = router