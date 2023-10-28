const bukuModel = require('../model/bukuModel')

const createBuku = async (req, res) => {
    try {
        const { body } = req
        const [data] = await bukuModel.createBuku(body)
        res.send({
            Status: "Success",
            Data: body,
            Result: data,
        })
    } catch (error) {
        res.send({
            error: error
        })
    }
}

module.exports = {
    createBuku,
}