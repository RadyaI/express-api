require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const middleware = require('./middleware/log')

const userRoute = require('./routes/user')
const kelasRouter = require('./routes/kelas')

app.use(middleware)
app.use(express.json())

app.use('/user', userRoute)
app.use('/kelas', kelasRouter)

app.listen(port, () => {
    console.log(`server berjalan di port ${port}`)
})