const fs = require('fs');
fs.writeFile('writeFile-01.txt', 'Hello World',
   err => err ? console.log(err) : console.log('Successfully Created')
)

// OR 
fs.writeFile('writeFile-02.txt', 'Hello World From File System', function (err) {
   if (err) {
      console.log(err)
   } else {
      console.log('Successfully Created')
   }
})