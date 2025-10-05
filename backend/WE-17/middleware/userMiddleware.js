
const signupMiddleware = (req, res, next) => {
    const { pin } = req.body

    if (!pin)
        return res.send('pin not found')

    next()
}

module.exports = signupMiddleware