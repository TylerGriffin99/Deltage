const io = require('./server').io

const data = {
  btc: {
    last: 2,
    current: 10,
    diff: 12,
    name: 'bitcoin'
  }
}



module.exports =function(socket) {
  console.log('socket manager', socket.id)

socket.on('dat2client', (data) => {
    console.log('emit connected', data)
    setInterval(() => {
      socket.emit('server2client', {msg: 'hello'})
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