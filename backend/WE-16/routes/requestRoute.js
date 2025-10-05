const express = require('express')
const request = require('../controllers/request.js')

const router = express.Router()

router.get('/about', request)

module.exports = router