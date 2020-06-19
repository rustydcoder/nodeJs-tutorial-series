const fs = require('fs');

const path = './example-2.txt'

const readStream = fs.createReadStream(path, 'utf-8')

const writeStream = fs.createWriteStream('piped-in.txt')

readStream.pipe(writeStream)