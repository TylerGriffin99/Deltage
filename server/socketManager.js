const {GET_DATA, COIN_DATA} = require('../common/events')
// import {CONNECTED_CLIENT, SEND_DATA} from '../common/events'  
const data = 
  {
    last: 2,
    current: 10,
    diff: 12,
    name: 'bitcoin'
  }




module.exports =function(socket) {
  console.log('socket manager', socket.id)

  socket.on(GET_DATA, () => {
    console.log('getting data', data)
    setInterval(() => {
      socket.emit(COIN_DATA, data)
    }, 3000)
  })

  // const data = 'hello'
  // socket.emit('server2client', (data) => {
  //   console.log('emitting from server', + data)
  //   io.emit('server2client', data)
  // })
}

// function testEmit (data) {
//   io.emit('server2client', data)
// }

// const testData = 'Hello World'

// testEmit(testData)