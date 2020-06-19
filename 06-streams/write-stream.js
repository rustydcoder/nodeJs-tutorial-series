const fs = require('fs');

const path = './example.txt'

const readStream = fs.createReadStream(path, 'utf-8')

const writeStream = fs.createWriteStream('example-2.txt')

readStream.on('data', chunk => writeStream.write(chunk))