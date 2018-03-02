import React from 'react'
import io from 'socket.io-client'

import './liveApp.css'

import Volumes from '../Volumes/Volumes.jsx'
import DollarValues from '../DollarValues/DollarValues.jsx'
import BestTrade from '../BestTrade/BestTrade.jsx'
import ExchangeDisplay from '../ExchangeDisplay/ExchangeDisplay.jsx'

// not sure if this is correct for live app
const socketUrl = process.env.PORT || 'http://localhost:3000/'

class LiveApp extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      coin_prices: {},
      numberOfRequests: 0,
      results: [],
      socket: null,
      data: ''
    }
  }

  componentDidMount () {
    this.initSocket()
  }

  initSocket = () => {
    const socket = io(socketUrl)
    socket.on('connect', () => {
      this.setState({socket})
    })
    socket.emit('get-data') 
    socket.on('coin-data', (data) => {
      console.log(data)
      this.setState({
        data: data
      })
    })
  }


  render(){
    return (
      <div className = 'liveApp'>
        <BestTrade/>
        <DollarValues />
        <ExchangeDisplay />
        <Volumes />
      </div>
    )
  }

}

export default LiveApp