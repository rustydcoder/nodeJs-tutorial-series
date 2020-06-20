const express = require('express');

const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('<p>Hello World from node. Go to <a href=\'user\'> User </a> </p>'))

app.get('/user', (req, res) => res.send('<a href=\'/\'>Go back</a>'))

app.listen(port)