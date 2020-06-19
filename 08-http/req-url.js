const http = require('http');

http.createServer((req, res) => {

   if (req.url === '/') {
      res.write('Hello World From Node')
      console.log('Listening at http://localhost:8080')
      res.end();
   } else {
      res.write('Another domain path, but anyways Hello there from Node')
      console.log('Listening at http://localhost:8080' + req.url)
      res.end()
   }
}).listen(8080)
