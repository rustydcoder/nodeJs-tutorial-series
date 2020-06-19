const fs = require('fs');

const path = './example.txt'

fs.createReadStream(path, 'utf-8').on('data', chunk => console.log(chunk))