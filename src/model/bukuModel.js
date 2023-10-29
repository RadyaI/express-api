const DB = require('../config/database')
// const multer = require('multer')

const getAllBuku = () => {
    const query = 'select * from buku'
    return DB.execute(query)
}

const selectBuku = (id) => {
    const query = `select * from buku where id_buku = ${id}`
    return DB.execute(query)
}

const deleteBuku = (id) => {
    const query = `delete from buku where id_buku = ${id}`
    return DB.execute(query)
}


module.exports = {
    selectBuku,
    getAllBuku,
    deleteBuku
}