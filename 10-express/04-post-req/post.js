const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => res.sendFile('static/index.html'))

app.post('/', (req, res) => {
   console.log(req.body)
   res.json(req.body)
})
app.listen(3000)