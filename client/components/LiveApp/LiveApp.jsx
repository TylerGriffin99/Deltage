import React from 'react'

import './liveApp.css'

import Volumes from '../Volumes/Volumes.jsx'
import DollarValues from '../DollarValues/DollarValues.jsx'
import BestTrade from '../BestTrade/BestTrade.jsx'
import ExchangeDisplay from '../ExchangeDisplay/ExchangeDisplay.jsx'

class LiveApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      coin_prices: {},
      numberOfRequests: 0,
      results: []
    }
  }

  render () {
    return (
      <div className = 'liveApp'>
        <h1> Delt&Delta;ge </h1>
        <BestTrade/>
        <DollarValues />
        <ExchangeDisplay />
        <Volumes />
      </div>
    )
  }
}

export default LiveApp
