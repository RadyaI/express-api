const userModel = require('../model/userModel')

const getAllUser = async (req, res) => {
    try {
        const [data] = await userModel.getAllUser()
        res.send({
            status: 'success',
            result: data
        })
    } catch (error) {
        res.send({
            message: 'server error',
            error: error
        }, 500)
    }
}

const selectUser = async (req, res) => {
    try {
        const { params } = req
        const [data] = await userModel.selectUser(params)
        res.send({
            "status": "Success",
            "result": data
        }, 200)
    } catch (error) {
        res.send({
            "Message": 'Failed',
            "error": error
        }, 500)
    }
}

const createUser = async (req, res) => {
    try {
        const { body } = req
        const [data] = await userModel.createUser(body)
        res.send({
            Status: 'success',
            result: data
        })
    } catch (error) {
        res.send({
            Status: 'failed create user',
            error: error
        }, 500)
    }
}

const updateUser = async (req, res) => {
    try {
        const { body, params } = req
        const [data] = await userModel.updateUser(params, body)
        res.send({
            Status: 'Success update users',
            result: data
        })
    } catch (error) {
        res.send({
            Message: "Failed update users",
            Error: error
        }, 500)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { params } = req
        const [data] = await userModel.deleteUser(params)
        res.send({
            Status: "Success",
            result: data
        })
    } catch (error) {
        res.send({
            Status: "Failed",
            error: error
        }, 500)
    }
}


module.exports = {
    getAllUser,
    selectUser,
    createUser,
    updateUser,
    deleteUser,
}