const DB = require('../config/database')
// const multer = require('multer')

const createBuku = (body) => {
    const fotoName = new Date().getTime()
    const query = `insert into buku (nama_buku, foto_buku,) value ('${body.nama_buku}','${fotoName}')`

    return DB.execute(query)
}

module.exports = {
    createBuku
}