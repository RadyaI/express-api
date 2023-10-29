const bukuModel = require('../model/bukuModel')

const getAllBuku = async (req, res) => {
    try {
        const [data] = await bukuModel.getAllBuku()
        res.send({
            Status: "Success",
            Data: data
        })
    } catch (error) {
        res.send({ error: error })
    }
}

const selectBuku = async (req, res) => {
    try {
        const { id } = req.params
        const [data] = await bukuModel.selectBuku(id)
        if (data == '') {
            res.send({
                Status: 'Not Found',
                Data: {}
            }, 404)
        } else {
            res.send({
                Status: "Success",
                Data: data
            })
        }
    } catch (error) {
        res.send({ error: error }, 500)
    }
}

const deleteBuku = async (req, res) => {
    try {
        const { id } = req.params
        const [result] = await bukuModel.deleteBuku(id)
        if (result.affectedRows == 0) {
            res.send({
                Status: 'Data Not Found',
                Result: result
            }), 404
        } else {
            res.send({
                Status: 'Success',
                Result: result
            })
        }
    } catch (error) {
        res.json({ error: error }, 500)
    }
}

module.exports = {
    getAllBuku,
    selectBuku,
    deleteBuku
}