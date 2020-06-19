const http = require('http');

http.createServer((req, res) => {
   res.write('Hello World From Node')
   console.log('Listening at http://localhost:8080/')
   res.end()
}).listen(8080)
