const guruModel = require('../model/guruModel')

const getAllGuru = async (req, res) => {
    try {
        const [data] = await guruModel.getAllGuru()
        res.send({
            Status: "Success",
            Result: data,
        }, 200)
    } catch (error) {
        res.send({ error: error })
    }
}

const selectGuru = async (req, res) => {
    try {
        const { id } = req.params
        const [data] = await guruModel.selectGuru(id)
        if (data == '') {
            res.send({
                Status: "Not found"
            }, 404)
        } else {
            res.send({
                Status: "success",
                result: data
            }, 200)
        }
    } catch (error) {
        res.send({ error: error }, 500)
    }
}

const createGuru = async (req, res) => {
    try {
        const { body } = req
        const [data] = await guruModel.createGuru(body)
        res.send({
            Status: "Success",
            Data: body,
            result: data
        }, 201)
    } catch (error) {
        res.send({
            error: error
        })
    }
}

const updateGuru = async (req, res) => {
    try {
        const { params, body } = req
        const [data] = await guruModel.updateGuru(params, body)
        res.send({
            Status: "Success",
            data: body,
            result: data
        }, 200)
    } catch (error) {
        res.send({ error: error })
    }
}

const deleteGuru = async (req, res) => {
    try {
        const { id } = req.params
        const [data] = await guruModel.deleteGuru(id)
        res.send({
            Status: "Success",
            Result: data
        }, 200)
    } catch (error) {
        res.send({ error: error }, 500)
    }
}

module.exports = {
    getAllGuru,
    selectGuru,
    createGuru,
    updateGuru,
    deleteGuru,
}