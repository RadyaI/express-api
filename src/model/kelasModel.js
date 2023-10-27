const sql = require('../config/database')

const getAllKelas = () => {
    const query = 'select * from kelas'
    return sql.execute(query)
}

const selectKelas = (params) => {
    const query = `select * from kelas where id_kelas = ${params.id}`
    return sql.execute(query)
}

const createkelas = (body) => {
    const query = `insert into kelas (tingkat, jurusan, kelas) values ('${body.tingkat}', '${body.jurusan}', '${body.kelas}')`
    return sql.execute(query)
}

const updateKelas = (params, body) => {
    const query = `update kelas set tingkat = '${body.tingkat}', jurusan = '${body.jurusan}', kelas = '${body.kelas}' where id_kelas = ${params.id}`
    return sql.execute(query)
}

const deleteKelas = (params) => {
    const query = `delete from kelas where id_kelas = ${params.id}`
    return sql.execute(query)
}

module.exports = {
    getAllKelas,
    selectKelas,
    createkelas,
    updateKelas,
    deleteKelas,
}