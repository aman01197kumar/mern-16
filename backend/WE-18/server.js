const express = require('express')
const router = require('./routes/user.routes.js')
const { mongoose } = require('mongoose')


const app = express()

const PORT = 3000 || 3001

app.use(express.json())

//mongodb+srv://dbUser:Aman1234@project1.n9qjal6.mongodb.net/mern_16(mention database name)
try {
    mongoose.connect('mongodb+srv://dbUser:Aman1234@project1.n9qjal6.mongodb.net/mern_16')
    console.log('database connected');
}
catch (err) {
    console.log(err);
}

app.use(router)

app.listen(PORT, () => console.log(`server started at ${PORT}`))
