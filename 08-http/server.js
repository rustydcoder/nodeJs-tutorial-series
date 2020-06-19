const http = require('http');
const fs = require('fs');


// make a directory
fs.mkdir('./static', err => {
   if (err) {
      console.log('Error in creating directory');
   } else {
      console.log('./static created')
      const readStream = fs.createReadStream('./index.html', 'utf-8')
      const writeStream = fs.createWriteStream('./static/index.html')
      readStream.pipe(writeStream)
   }
})

http.createServer((req, res) => {
   const readStream = fs.createReadStream('./index.html', 'utf-8')
   res.writeHead('200', { 'Content-type': 'text/html' })
   readStream.pipe(res)
   console.log('listening at http://localhost:3000')
}).listen(3000)