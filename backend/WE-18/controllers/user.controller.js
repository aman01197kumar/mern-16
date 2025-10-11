const USER = require("../models/user.schema")

const signup = async (req, res) => {
    const { username, contact, email, password } = req.body
    if (!username || !contact || !email || !password)
        return res.status(401).json({ success: false, message: "Fill all the fields" })

    const findUser = await USER.findOne({ email })

    console.log(findUser,'findUser');
    if (findUser)
        return res.status(300).json({ success: false, message: 'user already present' })

    const user = new USER({
        username: username,
        contact: contact,
        email: email,
        password: password
    })
    await user.save()

    return res.status(200).json({ success: true, message: 'successfully!!' })
}

const login = async (req, res) => {
    const { email, password } = req.body
}

module.exports = { signup, login }