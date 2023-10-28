const DB = require('../config/database')
const bcrypt = require('bcrypt')
const saltRound = 10

const getAllGuru = () => {
    const query = 'select * from guru'
    return DB.execute(query)
}

const selectGuru = (id) => {
    const query = `select * from guru where id_guru = ${id}`
    return DB.execute(query)
}

const createGuru = async (body) => {
    const password = await bcrypt.hash(body.password, saltRound)
    const query = `insert into guru (nama_guru, email, password) values ('${body.nama_guru}', '${body.email}', '${password}')`
    return DB.execute(query)
}

const updateGuru = async (params, body) => {
    const password = await bcrypt.hash(body.password, saltRound)
    const query = ` update guru 
                    set nama_guru = '${body.nama_guru}', email = '${body.email}', password = '${password}' 
                    where id_guru = ${params.id}`
    return DB.execute(query)
}

const deleteGuru = (id) => {
    const query = `delete from guru where id_guru = ${id}`
    return DB.execute(query)
}

module.exports = {
    getAllGuru,
    selectGuru,
    createGuru,
    updateGuru,
    deleteGuru
}