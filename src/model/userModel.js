const DB = require('../config/database')
const bcrypt = require('bcrypt')
const saltRound = 10

const getAllUser = () => {
    const query = 'select * from users'
    return DB.execute(query)
}

const selectUser = (params) => {
    const query = `select * from users where id_user = ${params.id}`
    return DB.execute(query)
}

const createUser = async (body) => {
    const password = await bcrypt.hash(body.password, saltRound)
    const query = `insert into users (nama_user, email, password) VALUES ('${body.nama_user}','${body.email}','${password}')`

    return DB.execute(query)
}

const updateUser = async (params, body) => {
    const password = await bcrypt.hash(body.password, saltRound)
    const query = `update users set nama_user = '${body.nama_user}' , email = '${body.email}', password = '${password}' where id_user = ${params.id}`

    return DB.execute(query)
}

const deleteUser = (params) => {
    const query = `delete from users where id_user = ${params.id}`

    return DB.execute(query)
}

module.exports = {
    getAllUser,
    selectUser,
    createUser,
    updateUser,
    deleteUser,
}