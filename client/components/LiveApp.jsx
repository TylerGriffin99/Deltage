import React from 'react'
import io from 'socket.io-client'
// import {USER_CONNECTED, LOGOUT} from '../Events'
// import LoginForm from './LoginForm'

const socketUrl = 'http://localhost:3000/'

class LiveApp extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      socket: null
    }
    this.handleClick = this.handleClick.bind(this)
  }


  componentWillMount() {
    this.initSocket()
  } 
  initSocket = () => {
    const socket = io(socketUrl)
    socket.on('connect', () => {
      console.log('react connected', socket.id)
     this.setState({socket})
    
    }) 
  }

  handleClick () {
    const socket = this.state.socket
    console.log('click works at least')
    socket.emit('data2client', 'emitting stuff')
  }

  render() {
    console.log(this.state.socket)
    return (
      <div>
    <h2>hey</h2>
    <button type='button' onClick={this.handleClick}>Testing Connection</button>
    </div>
    )
    
  }
}

export default LiveApp