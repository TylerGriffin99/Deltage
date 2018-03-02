import io from 'socket.io-client'
 


const {COIN_DATA} = require('../../common/events')
const socketUrl = process.env.PORT || 'http://localhost:3000/'


// dispatch actions from here

const initSocket = () => {
  const socket = io(socketUrl)
  socket.on(COIN_DATA, (data) => {
    console.log(data)

  })
}

export default initSocket