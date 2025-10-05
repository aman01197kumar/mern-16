const express = require('express')
const data = require('./data.js')
const userRouter = require('./route/userRoute.js')

const app = express()

app.use(express.json())

const PORT = 3000 || 3001

app.get('/about', (req, res) => {
    res.send('Hi there!!!')
})

app.post('/signup', (req, res) => {
    // res.send(req.body)
    const { username, email, password, contact } = req.body

    if (!username || !email || !password || !contact)
        return res.send('fill all the details')
    // console.log(req.body);
    return res.send({ username, email, password, contact })
})

// app.put('/update/:name', async (req, res) => {
//     const { name } = req.query
//     const { age } = req.body

//     if (!name || !age)
//         return res.send('fill all the fields')

//     const users = await data.find(user => user.name === name)

//     if (!users)
//         return req.send('user not found!!!')

//     users.age = age

//     // return res.send(users)
//     return res.send(data)
// })

// app.delete('/delete', async (req, res) => {
//     const { name } = req.query

//     const user = await data.filter(user => user.name !== name)

//     return res.send(user)

// })

const middleware = (req, res, next) => {
    const { age } = req.body

    if (age < 18)
        return res.send('less than 18 years not allowed!!')

    next()
}
//App level middleware
app.use(middleware)

app.get('/home', (req, res) => {
    res.send('Here you are!!!')
})

app.post('/contact', (req, res) => {
    const { contact } = req.body

    res.send(contact)
})

//Route level

const aboutMiddleware = (req, res, next) => {
    const { name } = req.body

    if (!name)
        return res.send('name not found')

    next()
}

app.use(userRouter)

app.listen(PORT, () => console.log(`server is listening at ${PORT}`))