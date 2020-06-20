const express = require('express');

const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('<p>Hello World from node. Go to <a href=\'user/George/50\'> User </a> </p>'))

app.get('/user/:name/:age', (req, res) => {
   console.log(req.params)
   res.send(`<p>My name is ${req.params.name} and I am ${req.params.age}. <a href='/'>Go back</a></p>`)
})

app.listen(port)