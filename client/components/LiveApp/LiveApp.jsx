import React from 'react'
import io from 'socket.io-client'
import {connect} from 'react-redux'

import './liveApp.css'
import Footer from '../Footer/Footer.jsx'
import Loading from '../Loading/Loading.jsx'
import Graph from '../Graph/Graph.jsx'
import {coinData} from '../../actions'
import MainPairs from '../MainPairs/MainPairs'
import baseUrl from '../../lib/base-url'
import Header from '../Header/Header'
import BestTrade from '../BestTrade/BestTrade.jsx'
import ExchangeDisplay from '../ExchangeDisplay/ExchangeDisplay.jsx'

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
        {!this.props.loaded && <Loading />}
        {this.props.loaded && <Header />}
        <div className='liveApp'>
          {this.props.loaded && <ExchangeDisplay />}
          {this.props.loaded && <BestTrade />}
          {this.props.loaded && <Graph />}
          {this.props.loaded && <MainPairs />}
        </div>
        {this.props.loaded && <Footer />}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loaded: state.receivedData.receivedData
  }
}

export default connect(mapStateToProps)(LiveApp)
