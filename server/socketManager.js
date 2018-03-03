const {COIN_DATA} = require('../common/events')
// REMOVE ONCE WORKING WITH REAL DATA  
const data = 
  {
    last: 2,
    current: 10,
    diff: 12,
    name: 'bitcoin'
  }

module.exports =function(socket) {
  setInterval(() => {
    socket.emit(COIN_DATA, data)
  }, 3000)
}
