const fs = require('fs');

// Creates a directory and path can be relative or absolute
fs.mkdir('./create-dir',
   err => err ? console.log(err) : console.log('Created folder')
)