require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const middleware = require('./middleware/log')
const upload = require('./middleware/multer')

const userRoute = require('./routes/user')
const kelasRouter = require('./routes/kelas')
const guruRouter = require('./routes/guru')
const bukuRouter = require('./routes/buku')

const DB = require('./config/database')

app.use(middleware)
app.use(express.json())
app.use('/asset/image', express.static('public/images'))

app.use('/user', userRoute)
app.use('/kelas', kelasRouter)
app.use('/guru', guruRouter)
// app.use('/buku', bukuRouter)

app.post('/image/buku/create', upload.single('foto_buku'), (req, res) => {
    try {
        const foto = new Date().getTime().toString()
        const fotoName = foto.slice(0, -2)
        const query = `insert into buku (nama_buku,foto_buku) values ('${req.body.nama_buku}', '${fotoName}.png')`
        DB.execute(query)
        res.send({
            Status: 'Success',
        }, 201)
    } catch (error) {
        res.send({ error: error })
    }
})

app.use((err, req, res, next) => {
    res.send({
        error: err
    })
})

app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})
