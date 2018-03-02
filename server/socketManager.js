const {COIN_DATA} = require('../common/events')
  
const data = 
  {
    last: 2,
    current: 10,
    diff: 12,
    name: 'bitcoin'
  }

module.exports =function(socket) {
  console.log('socket manager', socket.id)
  setInterval(() => {
    socket.emit(COIN_DATA, data)
  }, 3000)
}
