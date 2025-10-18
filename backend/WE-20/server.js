const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = require('./routes/user.routes.js')

dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3001

const MONGO_URI = process.env.MONGO_URI

try {
    mongoose.connect(MONGO_URI)
    console.log('connected!!');
}
catch (err) {
    console.log(err);
}

app.use(router)
app.listen(PORT, () => console.log(`server is running at ${PORT}`))