const signup = async(req, res) => {
    const { email, password } = req.body

    res.send({ email, password })
}

const about = async(req, res) => {
    res.send('this is route level middleware')
}

module.exports = {signup,about}