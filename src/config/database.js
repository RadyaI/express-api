const mysql = require('mysql2')
const sql = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
})


module.exports = sql.promise()