import React from 'react'
import io from 'socket.io-client'
import {connect} from 'react-redux'

import './liveApp.css'
import Footer from '../Footer/Footer.jsx'
import Graph from '../Graph/Graph.jsx'
import {coinData} from '../../actions'
import MainPairs from '../MainPairs/MainPairs'
import baseUrl from '../../lib/base-url'
import Header from '../Header/Header'
import BestTrade from '../BestTrade/BestTrade.jsx'
import DollarValues from '../DollarValues/DollarValues.jsx'
import ExchangeDisplay from '../ExchangeDisplay/ExchangeDisplay.jsx'

// TODO: should we be using a server file on the clientside?
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
      <div className='content'>
        <Header />
        <div className='liveApp'>
          <BestTrade />
          <DollarValues />
          <ExchangeDisplay />
          <Graph />
          <MainPairs />
        </div>
        <Footer />
      </div>
    )
  }
}

export default connect()(LiveApp)
