const logRequest = (req, res, next) => {
    console.log('ada request yang terjadi di ' + req.path)
    next()
}

module.exports = logRequest