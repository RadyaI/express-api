const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        const time = new Date().getTime().toString()
        const first = time.slice(0, -2)

        cb(null, `${first}.png`)
    }
})

const upload = multer({
    storage: storage
})

module.exports = upload