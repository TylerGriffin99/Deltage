import React from 'react'
import io from 'socket.io-client'

import './liveApp.css'

import Volumes from '../Volumes/Volumes.jsx'
import DollarValues from '../DollarValues/DollarValues.jsx'
import BestTrade from '../BestTrade/BestTrade.jsx'
import ExchangeDisplay from '../ExchangeDisplay/ExchangeDisplay.jsx'

//import lib and common functions
const {CONNECT, GET_DATA, COIN_DATA} = require('../../../common/events')
import socket from '../../lib/socket'

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
      data: false,
      count: 0
    }
  }

  componentDidMount () {
    socket()
  }

  render(){
    return (
      <div className = 'liveApp'>
      <h2>{this.state.count}</h2>
      <h3>{this.state.data && this.state.data.name}</h3>
        <BestTrade/>
        <DollarValues />
        <ExchangeDisplay />
        <Volumes />
      </div>
    )
  }

}

export default LiveApp