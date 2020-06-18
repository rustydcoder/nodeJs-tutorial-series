const fs = require('fs');
const path = './writeFile-01.txt';

// It is always good practice to access the files before reading
fs.access(path, fs.constants.F_OK, err => {

   if (err) {
      console.log('File does\'nt exist')
   } else {

      fs.readFile(path, 'utf-8', (err, data) => {

         if (err) {
            console.log(err)
         } else {
            console.log(data)
         }

      })

   }
})
