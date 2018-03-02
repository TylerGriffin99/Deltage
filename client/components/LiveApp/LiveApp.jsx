import React from 'react'
import io from 'socket.io-client'
import {connect} from 'react-redux'

import './liveApp.css'

import Volumes from '../Volumes/Volumes.jsx'
import DollarValues from '../DollarValues/DollarValues.jsx'
import BestTrade from '../BestTrade/BestTrade.jsx'
import ExchangeDisplay from '../ExchangeDisplay/ExchangeDisplay.jsx'

import baseUrl from '../../lib/base-url'
import {coinData} from '../../actions' 
const {COIN_DATA} = require('../../../common/events')

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
 const socket = io(baseUrl)
  socket.on(COIN_DATA, (data) => {
      console.log('socket', data)
      this.props.dispatch(coinData(data))
    })
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

export default connect()(LiveApp)