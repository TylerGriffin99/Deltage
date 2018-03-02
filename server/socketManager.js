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

  socket.on('get-data', () => {
    console.log('getting data', data)
    setInterval(() => {
      socket.emit('coin-data', {data})
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