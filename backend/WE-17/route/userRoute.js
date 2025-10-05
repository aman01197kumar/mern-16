const express = require('express')
const { signup, about } = require('../controller/userController.js')
const signupMiddleware = require('../middleware/userMiddleware.js')

const userRouter = express.Router()

userRouter.post('/signupuser', signup)
userRouter.get('/aboutUser',signupMiddleware, about)

module.exports = userRouter