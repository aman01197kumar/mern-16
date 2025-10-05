// const {sum,multiply} = require('./arithmetic.js')

// console.log(sum(1, 2));
// console.log(multiply(100,2));

// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('Hii there!!!')
// })

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { "Content-type": 'text/plain' })
//         res.end('You r in home page')
//     }
//     else if (req.url === '/contact') {
//         res.writeHead(200, { "Content-type": 'text/plain' })
//         res.end('You r in contact page')
//     }
//     else if (req.url === '/about') {
//         res.writeHead(200, { "Content-type": 'text/plain' })
//         res.end('You r in about page')
//     }
//     else {
//         res.writeHead(404, { "Content-type": 'text/plain' })
//         res.end('Page not found')
//     }
// })
// server.listen(3000, () => console.log('server started'))

// const fs = require('fs')

// fs.writeFile('hello.txt', 'hello world', (err, data) => {
//     if (err)
//         return err

//     console.log('filed saved');
//     return
// })

// fs.readFile('hello.txt','utf-8',(err,data)=>{
//     if(err)
//         return err

//     console.log(data);
//     return
// })

const express = require('express')
const request = require('./controllers/request.js')
const router = require('./routes/requestRoute.js')

const app = express()

// app.get('/', (req, res) => {
//     res.send('this is ccnknk page')
// })

// app.get('/about', (req, res) => {
//     console.log('here');
//     res.send('this is about page')
// })


// app.get('/about', request)

app.use(router)
app.listen(3000, () => console.log('server started'))