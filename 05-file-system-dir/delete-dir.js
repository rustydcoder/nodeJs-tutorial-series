const fs = require('fs');

// NOTE: You can only remove/delete an empty folder this snippet

//       fs.rmdir('./create-dir',
//          err => err ? console.log(err) : console.log('Deleted folder')
//       )


// If folder is full you do this instead
fs.readdir('./create-dir', (err, files) => {

   if (err)
      console.log(err)
   else
      for (const file of files) {

         fs.unlink(file, err => {
            if (err)
               console.log(err)
            else
               fs.rmdir('./create-dir',
                  err => err ? console.log(err) : console.log('Deleted folder')
               )
         })

      }

})