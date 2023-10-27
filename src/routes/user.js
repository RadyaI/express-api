const express = require('express')
const multer = require('multer')

const getData = multer()
const router = express.Router()

const userController = require('../controller/userController.js')

// Read
router.get('/', getData.array(), userController.getAllUser)
router.get('/:id', getData.array(), userController.selectUser)

// Create
router.post('/create', getData.array(), userController.createUser)

// update
router.put('/update/:id', getData.array(), userController.updateUser)

// delete
router.delete('/delete/:id', userController.deleteUser)

module.exports = router