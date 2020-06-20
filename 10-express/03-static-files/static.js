const express = require('express');

const app = express()

// Using middleware
app.use(express.static('static'))

app.get('/', (req, res) => {
   res.sendFile('static/index.html')
})

// listening at http://localhost:3000
app.listen(3000)