const readline = require('readline');

const rd = readline.createInterface({ input: process.stdin, output: process.stdout })

let a = Math.ceil(Math.random() * 10)
let b = Math.ceil(Math.random() * 10)
let result = a + b

rd.question(`What is the sum of ${a} and ${b}?\n`, answer => {

   if (answer.trim() == result) {

      console.log('Correct!!!')
      rd.close()

   } else {

      rd.setPrompt('Incorrect please try again later\n')
      rd.prompt()

      rd.on('line', answer => {

         if (answer.trim() == result) {
            console.log('Correct!!!')
            rd.close()
         } else {
            rd.setPrompt('Answer is incorrect\n')
            rd.prompt()
         }

      })

   }
})

// Readline is an instance of EventEmitter class
// rd.on('close', () => console.log('Correct!!!'))