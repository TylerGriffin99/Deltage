import React from 'react'
import io from 'socket.io-client'
// import {USER_CONNECTED, LOGOUT} from '../Events'
// import LoginForm from './LoginForm'

const socketUrl = 'http://localhost:3000/'

class TestSocket extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      socket: null,
      data: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }


  componentDidMount() {
    this.initSocket()
  } 
  initSocket = () => {
    const socket = io(socketUrl)
    socket.on('connect', () => {
      // console.log('react connected', socket.id)
     this.setState({socket})
    socket.on('server2client', (data) => {
      console.log('here from back end', data)
      this.setState({
        data: data
      })
      // console.log('server2client', this.state.data)
    })
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

export default TestSocket