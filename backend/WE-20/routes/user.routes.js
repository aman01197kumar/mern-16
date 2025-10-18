const express = require('express')
const { signup, login, home } = require('../controllers/user.controller.js')


const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/home', home)

module.exports = router