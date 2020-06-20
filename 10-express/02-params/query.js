const express = require('express');

const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('<p>Hello World from node. Go to <a href=\'user/George\'> User </a> </p>'))

app.get('/user/:name', (req, res) => {
   console.log(req.params)
   console.log(req.query)
   res.send(`<p>My name is ${req.params.name} . <a href='/user/:name?tutorial=express&age=99'>Get Query</a>.    <a href='/'>Go back</a>  </p>`)
})

app.listen(port)