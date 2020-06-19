const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip()

const readStream = fs.createReadStream('../06-streams/example.txt', 'utf-8')

const writeStream = fs.createWriteStream('./example.txt.gz')

readStream.pipe(gzip).pipe(writeStream)