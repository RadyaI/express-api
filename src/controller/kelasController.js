const kelasModel = require('../model/kelasModel')

const getAllKelas = async (req, res) => {
    try {
        const [data] = await kelasModel.getAllKelas()
        res.send({
            Status: "Success",
            Result: data
        }, 200)
    } catch (error) {
        res.send({ error: error })
    }
}

const selectKelas = async (req, res) => {
    try {
        const { params } = req
        const [data] = await kelasModel.selectKelas(params)
        if (data == '') {
            res.send({
                Message: 'Data not found'
            }, 404)
        } else {
            res.send({
                Status: 'Success',
                result: data
            }, 200)

        }
    } catch (error) {
        res.send({ error: error })
    }
}

const createKelas = async (req, res) => {
    try {
        const { body } = req
        if (!body.tingkat) {
            res.send({
                Message: 'Data belum benar'
            }, 400)
        } else {
            const [data] = await kelasModel.createkelas(body)
            res.send({
                Status: "Success",
                Data: body,
                Result: data
            })
        }
    } catch (error) {

        res.send({ error: error })
    }
}

const updateKelas = async (req, res) => {
    try {
        const { params, body } = req
        await kelasModel.updateKelas(params, body)
        res.send({
            Status: 'Success',
            Data: body
        })
    } catch (error) {
        res.send({ error: error })
    }
}

const deleteKelas = async (req, res) => {
    try {
        const { params } = req
        await kelasModel.deleteKelas(params)
        res.send({
            Status: "Success",
        })
    } catch (error) {

    }
}

module.exports = {
    getAllKelas,
    selectKelas,
    createKelas,
    updateKelas,
    deleteKelas,
}