const EventEmitter = require('events');
const eventEmitter = new EventEmitter()

eventEmitter.on('highlight', () => {
   console.log('highlight event has occured')
})

eventEmitter.emit('highlight')

eventEmitter.on('listening', (a, b) => {
   console.log(`${a}.${b} is playing`)
})

eventEmitter.emit('listening', 'James Bay - Bad', 'mp3')