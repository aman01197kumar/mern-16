const USER = require("../models/user.schema.js")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const signup = async (req, res) => {
    try {

        const { username, password, email, contact } = req.body
        if (!username || !password || !email || !contact)
            return res.status(400).json({ message: 'check all the fields correctly!!', success: false })

        const salt_val = 10
        const hashedPassword = await bcryptjs.hash(password, salt_val)

        const existingUser = await USER.findOne({ email })

        if (existingUser)
            return res.status(401).json({ message: 'email already registered!', success: false })

        const user = new USER({
            username,
            contact,
            password: hashedPassword,
            email
        })
        await user.save()
        return res.status(200).json({ message: 'user saved successfully!!', user, success: true })
    }
    catch (err) {
        return res.status(500).json({ message: err.message, success: false })
    }
}

const forgotPassword = async (req, res) => {
    try {

        const { email, newPassword } = req.body
        if (!email || !newPassword)
            return res.status(400).json({ message: 'check all the fields', success: false })

        const existingUser = await USER.findOne({ email })

        const hashedPassword = await bcryptjs.hash(newPassword, 10)

        existingUser.password = hashedPassword

        await existingUser.save()

        return res.status(200).json({ message: 'password changed successfully!', success: true })
    }
    catch (err) {
        return res.status(500).json({ message: err.message, success: false })
    }
}

const login = async (req, res) => {
    try {

        const { email, password } = req.body
        if (!email || !password)
            return res.status(400).json({ message: 'check all the fields', success: false })

        const existingUser = await USER.findOne({ email })
        if (!existingUser)
            return res.status(404).json({ message: 'please signup', success: false })

        const isMatched = await bcryptjs.compare(password, existingUser.password)

        if (isMatched) {
            const token = await jwt.sign({ email: email, password: password }, process.env.SECRET_KEY, { expiresIn: '1hr' })
            return res.status(200).json({ message: 'user logged in successfully!!', success: true, token })
        }


        // res.send(token)
        return res.status(401).json({ message: 'passwords donnot match', success: false })
    }
    catch (err) {
        return res.status(500).json({ message: err.message, success: false })
    }
}

const home = async (req, res) => {
    // const { token } = req.body
    // const token = req.headers['authorization'].split(' ')[1]
    // res.send(token)
    if (!token)
    return res.status(404).json({ message: 'token not found', success: false })
    const decode = await jwt.verify(token, process.env.SECRET_KEY)

    return res.status(200).json(decode)

}

module.exports = { signup, forgotPassword, login, home }