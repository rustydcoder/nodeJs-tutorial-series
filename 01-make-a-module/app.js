const { Add, times, array } = require('./math');

const add = new Add(1, 3);

const multipy = times(2, 5);

console.log(add.firstAndSecond());
console.log(multipy);
console.log(array);

// In Terminal Run
// C:\PATH\NodeJs\> cd make-a-module
// C:\PATH\NodeJs\make-a-module> node app.js