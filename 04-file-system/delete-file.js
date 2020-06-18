const fs = require('fs');

fs.unlink('./writeFile-02.txt',
   err => err ? console.log(err) : console.log('File deleted')
)