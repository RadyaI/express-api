require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const middleware = require('./middleware/log')

const userRoute = require('./routes/user')
const kelasRouter = require('./routes/kelas')
const guruRouter = require('./routes/guru')
const bukuRouter = require('./routes/buku')


app.use(middleware)
app.use(express.json())
app.use('/asset/image', express.static('public/images'))

app.use('/user', userRoute)
app.use('/kelas', kelasRouter)
app.use('/guru', guruRouter)
app.use('/buku', bukuRouter)


app.use((err, req, res, next) => {
    res.send({
        error: err
    })
})

app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})
