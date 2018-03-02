import io from 'socket.io-client'
import React from 'react'


const {CONNECT, GET_DATA, COIN_DATA} = require('../../common/events')
const socketUrl = process.env.PORT || 'http://localhost:3000/'


// dispatch actions from here

const initSocket = () => {
  const socket = io(socketUrl)
  socket.on(CONNECT, () => {
    // this.setState({socket})
    socket.emit(GET_DATA) 
  })
 
  socket.on(COIN_DATA, (data) => {
    console.log(data)
    // this.setState({
    //   data: data,
    //   count: this.state.count + 1
    // })
  })
}

export default initSocket