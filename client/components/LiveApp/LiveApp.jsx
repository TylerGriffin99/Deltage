import React from 'react'
import {connect} from 'react-redux'

import './liveApp.css'
import Footer from '../Footer/Footer.jsx'
import Loading from '../Loading/Loading.jsx'
import Graph from '../Graph/Graph.jsx'
import History from '../Graph/History.jsx'
import {coinData} from '../../actions'
import MainPairs from '../MainPairs/MainPairs'
import Header from '../Header/Header'
import BestTrade from '../BestTrade/BestTrade.jsx'
import ExchangeDisplay from '../ExchangeDisplay/ExchangeDisplay.jsx'

const {COIN_DATA} = require('../../../common/events')

class LiveApp extends React.Component {
  componentDidMount () {
    this.props.socket.on(COIN_DATA, (data) => {
      this.props.dispatch(coinData(data))
    })
  }

  componentWillUnmount () {
    this.socket.close()
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
          {this.props.loaded && <History />}
        </div>
        {this.props.loaded && <Footer />}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loaded: state.receivedData,
    socket: state.socket
  }
}

export default connect(mapStateToProps)(LiveApp)
