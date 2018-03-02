const io = require('./index').io

const data = {
  btc: {
    last: 2,
    current: 10,
    diff: 12,
    name: 'bitcoin'
  }
}



module.exports =function(socket) {
  console.log('socket manage', socket.id)

  socket.on('data2client', (data) => {
    const someFunc = (data) => {
      {data: data}
    }
    console.log('emit connected', data)
    // io.emit(data)
  })
}