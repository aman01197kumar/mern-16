const express = require('express')
const router = require('./routes/user.routes.js')
const mongoose = require('mongoose')
const app = express()

const PORT = 3001;
const MONGO_URI = 'mongodb+srv://dbUser:Aman1234@project1.n9qjal6.mongodb.net/mern_16';

app.use(express.json())

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); // Exit process with failure
    }
}

connectDB();

app.get('/', (req, res) => res.send('Hello World!'))
app.use(router)

app.listen(PORT, () => console.log(`server started at ${PORT}`))
