const EventEmitter = require('events');

class Person extends EventEmitter {
   constructor(name) {
      super()
      this._name = name
   }

   get myName() {
      return this._name
   }
}

const george = new Person('george')

george.on('name', () => {
   console.log('my name is ' + george.myName)
})

george.emit()