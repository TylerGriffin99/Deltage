import React from 'react'
import io from 'socket.io-client'
import {connect} from 'react-redux'

import './liveApp.css'
import Graph from '../Graph/Graph.jsx'
import BestTrade from '../BestTrade/BestTrade.jsx'
import DollarValues from '../DollarValues/DollarValues.jsx'
import ExchangeDisplay from '../ExchangeDisplay/ExchangeDisplay.jsx'

import baseUrl from '../../lib/base-url'
import {coinData} from '../../actions'
const {COIN_DATA} = require('../../../common/events')

class LiveApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      coin_prices: {},
      numberOfRequests: 0,
      results: []
    }
  }

  componentDidMount () {
    const socket = io(baseUrl)
    socket.on(COIN_DATA, (data) => {
      this.props.dispatch(coinData(data))
    })
  }

  render () {
    return (
      <div className = 'liveApp'>
        <BestTrade/>
        <DollarValues />
        <ExchangeDisplay />
        <Graph />
      </div>
    )
  }
}

export default connect()(LiveApp)
